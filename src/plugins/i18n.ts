import Vue from 'vue';
import VueI18n from "vue-i18n";
import {i18nLocales} from "@/lang";

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages: i18nLocales,
})