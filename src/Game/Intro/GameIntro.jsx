import React from 'react';
import {observer} from "mobx-react";
import Dialog from "../Dialog/Dialog";
import appStore from "../../store";
import {Register} from "../../Register";

const introSteps = require('../../gameplay/stories/intro-steps.json')

export const GameIntro = observer(() => {
    const {intro} = appStore;
    const step = introSteps.find(step => step.id === intro.currentStep);

    if (step.id === 'register') {
        return (
            <Register/>
        )
    }

    return (
        <Dialog
            char={step.char}
            position={step.position}
            text={step.text}
            next={() => appStore.updateIntroStep(step.next)}
            background={step.background}
        />
    )
})