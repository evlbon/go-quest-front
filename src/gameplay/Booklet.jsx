import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import appStore from "../store";
import Dialog from "../Game/Dialog/Dialog";
import {set} from "mobx";
import PseudoSelect from "./PseudoSelect/PseudoSelect";

export const Booklet = observer(({userInfo, onEnd}) => {
    const [step, setStep] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        appStore.playGame().then(setStep).catch(alert);
    }, []);

    const saveDialog = () => {
        if(loading)
            return;

        setLoading(true);
        appStore
            .saveGame({isDialog: true})
            .then(newStep => {
                setStep(newStep);
                setLoading(false);
            })
            .catch(alert);
    }

    const saveGame = (result) => {
        if(loading)
            return;

        setLoading(true);
        appStore.saveGame(result)
            .then(newStep => {
                setStep(newStep);
                setLoading(false);
            })
            .catch(alert);
    }

    if(!step) return <div style={{marginTop: '70%'}} className="loader"/>

    if(step.type === 'booklet_end') {
        onEnd();
    }

    // if(step.type === 'story') {
    //     return (
    //         <Dialog
    //             position={step.position}
    //             char={step.char}
    //             text={step.text}
    //             background={step.background}
    //             next={saveDialog}/>
    //     )
    // }

    if(step.type==='booklet_question' || step.type === 'story' || step.type === 'booklet_answer') {
        let params = {}

        if(step.type === 'booklet_question'){
            const { activity: {question, answers, choose}, background } = step;
            params = {
                text: question,
                actions: answers,
                next: saveGame,
                choose: choose,
                background: "booklet.png"
            }
        }
        else if(step.type === 'story'){
            params = {
                text: step.text,
                next: saveDialog,
                position:step.position,
                char:step.char,
                background: step.background
            }
        } else {
            params = {
                text: step.text,
                next: saveDialog,
                background: "booklet.png"
            }
        }

        return <Dialog {...params}/>
    }

    // if(step.type === 'booklet_answer') {
    //     return (
    //         <Dialog text={step.text} next={saveDialog} background="booklet.png"/>
    //     )
    // }



    if(step.type === 'pseudoSelect')
        return <PseudoSelect next={saveDialog}/>


    return null;
})