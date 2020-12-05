import React, {useEffect, useState} from 'react';
import MenuBox from "../../Game/Menu/MenuBox";

const items = [
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
    const [pseudoItem,setPseudoItem] = useState({
        image: 'https://thiscatdoesnotexist.com/',
        playable: true,
        play: ()=>console.log('start 1 story')
    })
    const [currentItem, setCurrentItem] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
            setPseudoItem({...pseudoItem, hover: true})
        },1000)
        setTimeout(()=>{
            setCurrentItem(0)
        },3000)
    },[])


    return<>
        <MenuBox items={[pseudoItem,...items]} defCurrentItem={currentItem}/>
    </>
};

export default PseudoSelect;