import { observable, action, autorun, decorate, computed } from 'mobx'
import Cookie from "js-cookie"
import {registerReq, loginReq, userInfoReq, playGameReq, saveGameReq} from "./api";

class AppStore {
    authToken = '';

    setToken(token) {
        Cookie.set('authToken', token);
        this.authToken = token;
    }

    async getUserInfo() {
        return (await userInfoReq(this.authToken)).data
    }

    async playGame() {
        return (await playGameReq(this.authToken)).data;
    }

    async saveGame() {
        return (await saveGameReq({lol: 'kek'},this.authToken)).data;
    }

    async register(data) {
        const token = (await registerReq(data)).data;
        this.setToken(token);
    }

    async login(data) {
        const token = (await loginReq(data)).data;
        this.setToken(token)
    }
}

decorate(AppStore, {
    authToken: observable,
    setToken: action
});

const appStore = new AppStore();

autorun(() => {
    const token = Cookie.get('authToken');
    if(!token) return;
    appStore.setToken(token);
});

export default appStore;