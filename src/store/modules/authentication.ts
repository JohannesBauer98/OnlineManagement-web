import store from "../";
import router from '../../router';
import * as vuex from "vuex";
import * as Cookie from 'tiny-cookie';
import {LoginCredentials} from "@/models/LoginCredentials";
import {IToken, Token} from "@/models/Token";
import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import {AuthenticationService} from "@/services/AuthenticationService";
import User from "@/models/User";
import UserService from "@/services/UserService";

export interface IAuthenticationState {
    isAuthenticated: boolean;
    login(credentials: LoginCredentials): Promise<string>;
    getToken(): Promise<Token>;
    logout(): void;
}

@Module({dynamic: true, store, name: "authentication_state", namespaced: true,})
class AuthenticationState extends VuexModule implements IAuthenticationState {
    constructor(module: vuex.Module<ThisType<{}>, any>) {
        super(module);
    }

    // public vars

    // private vars
    private authenticationService: AuthenticationService = new AuthenticationService();
    private userService: UserService = new UserService();
    private token: IToken | null = null;
    private _user: User | null = null;

    // getters
    get isAuthenticated(): boolean {
        //init is called before auth, thus must not be null
        if (this.token === null) return false;
        //IMPORTANT: getDate() returns day not milliseconds!
        return this.token.expiresOn.valueOf() >= Date.now();
    }

    get user(): User {
        if (this._user !== null)
            return this._user;
        let res = new User();
        res.setFromDto(Cookie.get("user") ?? {});
        return res;
    }

    get accessToken() : string | null {
        if (this.token === null) {
            return null;
        }
        return `Bearer ${this.token.accessToken}`;
    }

    // actions
    @Action
    async initAuth() {
        if (this.token === null) {
            let cookieToken = Cookie.get("token");
            if (cookieToken !== null) {
                this.SET_TOKEN(new Token(cookieToken, new Date(parseInt(Cookie.get("expiry")?? Date.now().toString()))));
            }
        }
        if (this._user === null) {
            let cookieUser = JSON.parse(Cookie.get("user") ?? "{}");
            if (Object.getOwnPropertyNames(cookieUser).length !== 0) {
                this.SET_USER(new User(cookieUser.id, cookieUser.email, cookieUser.name));
            }
        }
    }

    @Action
    async getToken(): Promise<Token> {
        return this.token ?? new Token();
    }

    @Action
    async login(credentials: LoginCredentials): Promise<string> {
        let newToken: Token;

        try {
            newToken = await this.authenticationService.login(credentials);
        } catch (ex) {
            return ex.message;
        }

        this.SET_TOKEN(newToken);

        try {
            this.SET_USER(await this.userService.getInfo());
        } catch (ex) {
            return ex.message;
        }

        return "success";
    }

    @Action
    logout(): void {
        this.removeToken();
        router.push("/signIn");
    }

    // mutation actions

    // mutations
    @Mutation
    SET_TOKEN(newToken: IToken) {
        this.token = newToken;
        Cookie.set("token", newToken.accessToken, {expires: newToken.expiresOn.valueOf(), samesite: "strict", /*secure: true set in production mode!*/});
        Cookie.set("expiry", newToken.expiresOn.valueOf().toString(), {samesite: "strict", /*secure: true set in production mode!*/});
    }

    @Mutation
    SET_USER(newUser: User) {
        this._user = newUser;
        Cookie.setCookie("user", JSON.stringify(this._user), {expires: this.token?.expiresOn.valueOf() ?? "1D", samesite: "strict", /*secure: true set in production mode!*/})
    }

    @Mutation
    removeToken() {
        this.token = null;
        Cookie.removeCookie("token");
        Cookie.removeCookie("expiry");
    }

}

export const AuthenticationModule = getModule(AuthenticationState);
