import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import appStore from "../store";
import {Booklet} from "./Booklet";
import Menu from "../Game/Menu/Menu";
import {useGameplayState} from "../utils/updateGameplayState";
import items from "./stories/menu-cards.json";
import {CardSelect} from "../Game/CardSelect/CardSelect";

const availableState = {
    booklet: Booklet,
    main: ()=><div>Main</div>,
    cardSelect: CardSelect

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