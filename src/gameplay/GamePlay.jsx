import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import appStore from "../store";
import {Booklet} from "./Booklet";
import Menu from "../Game/Menu/Menu";
import {useGameplayState} from "../utils/updateGameplayState";
import items from "./stories/menu-cards.json";
import {CardSelect} from "../Game/CardSelect/CardSelect";
import {Main} from "./Main";
import Loose from "../Game/Ends/Loose";
import Win from "../Game/Ends/Win";

const availableState = {
    booklet: Booklet,
    gameOver: Loose,
    main: Main,
    cardSelect: CardSelect,
    win: Win,

}

export const GamePlay = observer(() => {
    const [userInfo, setUserInfo] = useState(null);
    const [gameplayState, updateGameplayState] = useGameplayState();

    useEffect(()=>{
        setUserInfo(null);
        appStore.getUserInfo().then(setUserInfo).catch(alert);
    }, [gameplayState]);

    if(!userInfo) return <div>Загрузка</div>

    const CurrentState = availableState[userInfo.gameplay.state];

    return <CurrentState userInfo={userInfo} onEnd={updateGameplayState}/>
})