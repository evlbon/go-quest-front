import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import appStore from "../store";
import Dialog from "../Game/Dialog/Dialog";
import {set} from "mobx";

export const Booklet = observer(({userInfo, onEnd}) => {
    const [step, setStep] = useState(null);

    useEffect(()=>{
        appStore.playGame().then(setStep).catch(alert);
    }, []);

    const saveDialog = () => {
        setStep(null);
        appStore.saveGame({isDialog: true}).then(setStep).catch(alert);
    }

    const saveGame = (result) => {
        setStep(null);
        appStore.saveGame(result).then(setStep).catch(alert);
    }

    if(!step) return <div style={{marginTop: '70%'}} className="loader"/>

    if(step.type === 'booklet_end') {
        onEnd();
    }

    if(step.type === 'story') {
        return (
            <Dialog
                position={step.position}
                char={step.char}
                text={step.text}
                background={step.background}
                next={saveDialog}/>
        )
    }

    if(step.type==='booklet_question') {
        const { activity: {type, question, answers, choose} } = step;

        if(type==='radio') {
            return (
                <Dialog text={question} actions={answers} next={saveGame} background="booklet.png"/>
            )
        }

        if(type==='checklist') {
            return (
                <Dialog text={question} actions={answers} next={saveGame} choose={choose} background="booklet.png"/>
            )
        }
    }

    if(step.type === 'booklet_answer') {
        return (
            <Dialog text={step.text} next={saveDialog} background="booklet.png"/>
        )
    }


    return null;
})