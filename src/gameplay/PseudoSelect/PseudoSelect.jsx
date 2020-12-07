import React, {useEffect, useState} from 'react';
import MenuBox from "../../Game/Menu/MenuBox";
import ProtagonistThought from "./ProtagonistThought";
import Menu from "../../Game/Menu/Menu";

const items = [
    {
        image: 'https://thiscatdoesnotexist.com/',
        playable: true,
        play: () => {
        }
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        playable: true,
        play: () => {
        }
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        playable: true,
        play: () => {
        }
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        playable: true,
        play: () => {
        }
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        playable: true,
        play: () => {
        }
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        playable: true,
        play: () => {
        }
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        playable: true,
        play: () => {
        }
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        onClick: null
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        onClick: null
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        onClick: null
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        onClick: null
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        onClick: null
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        onClick: null
    },
    {
        image: 'https://thiscatdoesnotexist.com/',
        onClick: null
    },
]

const PseudoSelect = ({next}) => {
    const [pseudoItem, setPseudoItem] = useState({
        image: 'https://thiscatdoesnotexist.com/',
        playable: true,
        play: next
    })
    const [currentItem, setCurrentItem] = useState(null)
    const [text, setText] = useState(null)

    useEffect(() => {
        // setTimeout(()=>{
        //     setText('Нужно выбрать карточку, выберу первую')
        // },1000)
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
        <Menu items={[pseudoItem, ...items]} defCurrentItem={currentItem}/>
    </>
};

export default PseudoSelect;