import {BaseService} from "@/services/BaseService";
import {ILoginCredentials} from "@/models/LoginCredentials";
import {IToken, Token} from "@/models/Token";

export class AuthenticationService extends BaseService {
    async login(loginCredentials: ILoginCredentials): Promise<IToken> {
        try {
            //@ToDo: added REST Service
            const accessToken = "55ed7b2dd599d7c5f4f67912e6030366";

            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);

            const expiresOn = new Date(tomorrow);

            return new Token(accessToken, expiresOn);
        } catch (ex) {
            console.log(ex);
            if (ex.message.includes("400")) {
                throw new Error("Falsches Passwort oder falsche Email!");
            } else {
                //unknown error

                throw new Error("");
            }
        }
    }

    logout(): void {

    }
}