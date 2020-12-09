import { observable, action, autorun, decorate, computed } from 'mobx'
import Cookie from "js-cookie"
import {
    registerReq,
    loginReq,
    userInfoReq,
    playGameReq,
    saveGameReq,
    selectCardReq,
    getSelectedCardsStateReq
} from "./api";

class AppStore {
    authToken = '';
    intro = {
        currentStep: "welcome",
        finished: false,
    }

    setToken(token) {
        Cookie.set('authToken', token);
        this.authToken = token;
    }

    updateIntroStep(newStep) {
        this.intro.currentStep = newStep;
    }

    async getUserInfo() {
        return (await userInfoReq(this.authToken)).data
    }

    async playGame() {
        return (await playGameReq(this.authToken)).data;
    }

    async selectCard(selectedCards) {
        return (await selectCardReq(selectedCards, this.authToken)).data
    }

    async getSelectedCardsState() {
        return (await getSelectedCardsStateReq(this.authToken)).data
    }

    async saveGame(result) {
        return (await saveGameReq(result, this.authToken)).data;
    }

    async register(data) {
        const token = (await registerReq(data)).data;
        this.setToken(token);
    }

    async login(data) {
        const token = (await loginReq(data)).data;
        this.setToken(token)
    }

    async playMainGameReq() {
        return (await playMainGameReq(this.authToken)).data;
    }

    async saveMainGameReq() {
        return (await saveMainGameReq(this.authToken)).data
    }
}

decorate(AppStore, {
    authToken: observable,
    setToken: action,
    intro: observable,
    updateIntroStep: action,
});

const appStore = new AppStore();

autorun(() => {
    const token = Cookie.get('authToken');
    if(!token) return;
    appStore.setToken(token);
});

export default appStore;