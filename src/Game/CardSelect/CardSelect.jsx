import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import appStore from "../../store";
import ProtagonistThought from "../../gameplay/PseudoSelect/ProtagonistThought";
import Menu from "../Menu/Menu";
import items from "../../gameplay/stories/menu-cards.json";

export const CardSelect = observer(({userInfo, onEnd}) => {
    const [selectedCardsState, setSelectedCardsState] = useState(null);
    const [thoughtVisible, setThoughtVisible] = useState(true);

    useEffect(() => {
        appStore.getSelectedCardsState().then(setSelectedCardsState)
    }, [])

    const onSelectEnd = (selectedCards) => {
        setSelectedCardsState(null);
        setThoughtVisible(true);
        appStore.selectCard(selectedCards).then(setSelectedCardsState);
    }

    if (!selectedCardsState) return null;

    if (selectedCardsState.step === 'main') {
        onEnd();
    }

    let renderedItems;
    if (selectedCardsState.step === 1) {
        renderedItems = items.map(i => ({...i, closable: true, selectable: true}));
    }
    if (selectedCardsState.step === 2) {
        renderedItems = items.filter(i => selectedCardsState.selectedCards.includes(i.id)).map(i => ({
            ...i,
            closable: true,
            selectable: true
        }));
    }
    if (selectedCardsState.step === 3) {
        renderedItems = items.filter(i => selectedCardsState.selectedCards.includes(i.id) && i.id !== userInfo.gameplay.main.currentCard).map(i => ({
            ...i,
            closable: true,
            play: () => appStore.startMainGame(i.id).then(() => onEnd())
        }));
    }
    return (
        <div>
            {thoughtVisible &&
            <ProtagonistThought onClick={() => setThoughtVisible(false)} text={selectedCardsState.text}/>}
            <Menu onSelectEnd={onSelectEnd} needSelect={Math.floor(renderedItems.length / 2)} items={renderedItems}/>
        </div>
    )

})