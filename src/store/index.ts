import Vue from "vue";
import { vuexfireMutations } from 'vuexfire';
import Vuex from "vuex";
import {IAuthenticationState} from "@/store/modules/authentication";

Vue.use(Vuex)

export interface IRootState {
    authentication: IAuthenticationState;
}

export default new Vuex.Store<IRootState>({
    mutations: {
        ...vuexfireMutations
    }
})