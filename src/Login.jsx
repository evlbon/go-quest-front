import React, {useState} from 'react';
import {Input} from "./components/Input";
import {InputPhone} from "./components/InputPhone";
import {getFormData} from "./utils/getFormData";
import appStore from "./store";
import {observer} from "mobx-react";

export const Login = observer(({goBack}) => {
    const [hint, setHint] = useState('');

    const handleSubmit = (e) => {
        const data = getFormData(e);
        appStore.login(data).catch(() => setHint('Неправильный логин или пароль'));
        e.preventDefault();
    }

    return (
        <div className="Register" style={{backgroundImage: 'url(/reg_back.png)'}}>

            <img src={'/login_head.png'} alt="header"/>
            <form onSubmit={handleSubmit}>
                <InputPhone onChange={()=>setHint('')} name="phone" label="Номер телефона"/>
                <Input onChange={()=>setHint('')} name="password" label="Пароль"/>

                <div>{hint}</div>

                <div style={{marginTop: 10}} className="login-buttons">

                    <button onClick={goBack}>Назад</button>
                    <button type="submit">Войти</button>
                </div>
            </form>

            {/*<span onClick={()=>props.history.push('/register')}>Регистрация</span>*/}
        </div>
    )
})