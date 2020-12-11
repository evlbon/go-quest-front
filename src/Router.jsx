import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import Route from 'react-router-dom/Route'
import Redirect from 'react-router-dom/Redirect'
import appStore from "./store";
import {observer} from "mobx-react";
import GameBox from "./Game/GameBox";
import {GameIntro} from "./Game/Intro/GameIntro";
import {GamePlay} from "./gameplay/GamePlay";
import Win from "./Game/Ends/Win";
import Loose from "./Game/Ends/Loose";

const RedirectIfAuth = observer(() => {
    if(appStore.authToken)return <Redirect to="/"/>
    return <Redirect to="/login"/>
})

export const BaseRouter = observer(() => {
    return (
        <Router>
            <Route exact path='/register'/>
            <Route exact path='/login'/>

            <GameBox>
                {appStore.authToken ?
                    <Route exact path='/test' component={GamePlay}/>
                    :
                    <Route exact path='/test' component={GameIntro}/>
                }

            </GameBox>
        </Router>
    )
});