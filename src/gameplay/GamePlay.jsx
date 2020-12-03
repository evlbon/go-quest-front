import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import appStore from "../store";
import {Booklet} from "./Booklet";
import Menu from "../Game/Menu/Menu";

const availableState = {
    booklet: Booklet,
    main: ()=><div>Main</div>,
    cardSelect: Menu
}

export const GamePlay = observer(() => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(()=>{
        appStore.getUserInfo().then(setUserInfo).catch(alert);
    }, [])

    if(!userInfo) return <div>Загрузка</div>

    const CurrentState = availableState[userInfo.gameplay.state];

    return <CurrentState userInfo={userInfo}/>
})