import React, {useState} from 'react';
import GameChar from "./GameChar";
import BubbleBox from "./BubbleBox"
import './Dialog.css'

const steps = [
    {
        char: 'gta.png',
        pos: 'left',
        text: 'Привет'
    },
    {
        char: 'shrek.png',
        pos: 'right',
        text: 'Иди на хуй'
    },
    {
        char: 'gta.png',
        pos: 'left',
        text: 'Что же ему сказать???',
        actions: ['Сам иди на хуй','Ты пидор','Ну ладно']
    },
]

const Dialog = () => {
    const [state, setState] = useState(0)
    const currentStep = steps[state]

    const next = (e) => {
        e&&console.log(e)
        setState((state+1)%3)
    }


    return <div
        className='Dialog'
        onClick={() =>!currentStep.actions && next()}
    >
        <GameChar position={currentStep.pos} char={currentStep.char}/>

        <BubbleBox
            position={currentStep.pos}
            text={currentStep.text}
            onSelect={!!currentStep.actions && next}
            actions={currentStep.actions}
        />
    </div>
};

export default Dialog;