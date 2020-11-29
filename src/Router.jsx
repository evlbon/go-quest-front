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

const RedirectIfAuth = observer(() => {
    if(appStore.authToken)return <Redirect to="/"/>
    return <Redirect to="/login"/>
})

export const BaseRouter = observer(() => {
    return (
        <Router>
            <RedirectIfAuth>
                <Route exact path='/register'/>
                <Route exact path='/login'/>
            </RedirectIfAuth>

            <Route exact path='/'>
                {appStore.authToken ? <div onClick={()=>appStore.saveGame().then(console.log)}>hello world</div> : <Redirect to="/login"/>}
            </Route>
        </Router>
    )
});