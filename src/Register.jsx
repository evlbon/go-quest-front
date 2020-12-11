import React, {useEffect, useRef, useState} from 'react';
import { Input } from "./components/Input";
import { InputPhone } from "./components/InputPhone";
import { InputDate } from "./components/InputDate";
import { getFormData } from "./utils/getFormData";
import appStore from "./store";
import {observer} from "mobx-react";
import {set} from "mobx";
import CheckBox from "./components/CheckBox";

export const Register = observer((props) => {
    const handleSubmit = (e) => {
        const data = getFormData(e);
        appStore.register(data).catch(() => {
            setHint('Пользователь с таким номером телефона уже зарегистрирован');
        });
        e.preventDefault();
    }

    const [hint, setHint] = useState('');

    const formRef = useRef(null);

    return (
        <div className="Register" style={{backgroundImage: 'url(/reg_back.png)'}}>
            <img src={'/login_head.png'} alt="header"/>
            <form ref={formRef} onSubmit={handleSubmit}>
                <Input name="firstName" label="Имя"/>
                <Input name="lastName" label="Фамилия"/>
                <InputPhone name="phone" hasError={!!hint} onChange={()=>setHint('')} label="Номер телефона"/>
                <InputDate name="birthDate" label="Дата рождения"/>
                <Input name="password" label="Пароль"/>
                <Input name="city" label="Город"/>
                <Input name="school" label="Школа"/>
                <Input name="classroom" label="Класс"/>
                <CheckBox/>

                <div>{hint}</div>
                <div style={{marginTop: 10}}>
                    <button type="submit">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    )
})