import React, {useEffect, useState} from 'react';
import ProtagonistThought from "./ProtagonistThought";
import Menu from "../../Game/Menu/Menu";

const items = require('../stories/menu-cards.json')

const PseudoSelect = ({next}) => {
    const [pseudoItem, setPseudoItem] = useState({
        image: 'waiting_room_hiv_center.png',
        playable: true,
        play: next
    })
    const [currentItem, setCurrentItem] = useState(null)
    const [text, setText] = useState(null)

    const itemsMap = items.map(item => ({
        image: item.firstStepDescription.photo
    }))

    useEffect(() => {
        setTimeout(()=>{
            setText('О, это моя последняя фотография. Страшновато испытывать эту штуку впервые на старых моментах. Начну с этой.')
        },1000)
    }, [])

    const first = () => {
        setText(null)
        setTimeout(() => {
            setPseudoItem({...pseudoItem, hover: true})
        }, 500)
        setTimeout(() => {
            setCurrentItem(0)
        }, 1000)
    }


    return <>
        {text && <ProtagonistThought text={text} onClick={first}/>}
        <Menu items={[pseudoItem, ...itemsMap]} defCurrentItem={currentItem}/>
    </>
};

export default PseudoSelect;