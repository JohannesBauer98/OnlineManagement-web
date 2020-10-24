import Vue from "vue";
import { vuexfireMutations } from 'vuexfire';
import Vuex from "vuex";

Vue.use(Vuex)

export interface IRootState {

}

export default new Vuex.Store<IRootState>({
    mutations: {
        ...vuexfireMutations
    }
})