import axios from 'axios';
import {apiToken, baseUrl} from "./config";

export const registerReq = (data) => {
    return axios.post(`${baseUrl}/register`, data, {
        headers: {
            apiToken,
        }
    })
}

export const userInfoReq = (authToken) => {
    return axios.post(`${baseUrl}/user-info`, {}, {
        headers: {
            authorization: authToken,
            apiToken,
        }
    })
}

export const playGameReq = (authToken) => {
    return axios.post(`${baseUrl}/play`, {}, {
        headers: {
            authorization: authToken,
            apiToken,
        }
    })
}

export const selectCardReq = (selectedCards, authToken) => {
    return axios.post(`${baseUrl}/play`, {selectedCards}, {
        headers: {
            authorization: authToken,
            apiToken,
        }
    })
}

export const getSelectedCardsStateReq = (authToken) => {
    return axios.post(`${baseUrl}/play`, {}, {
        headers: {
            authorization: authToken,
            apiToken,
        }
    })
}

export const saveGameReq = (result, authToken) => {
    return axios.post(`${baseUrl}/play`, {result}, {
        headers: {
            authorization: authToken,
            apiToken,
        }
    })
}

export const loginReq = (data) => {
    return axios.post(`${baseUrl}/login`, data, {
        headers: {
            apiToken,
        }
    })
}