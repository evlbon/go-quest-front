import React, {useEffect, useState} from 'react';
import MenuItem from "./MenuItem";

const MenuBox = ({items, defCurrentItem=null}) => {
    const [currentItem, setCurrentItem] = useState(defCurrentItem)
    useEffect(()=>{
        setCurrentItem(defCurrentItem)
    },[defCurrentItem])

    const close = () => setCurrentItem(null)

    const choose = (index) => setCurrentItem(index)

    return <div
        className="MenuBox"
    >
        {items.map((item,index) => <MenuItem
            key={index}
            onClick={choose.bind(null, index)}
            {...item}
            />)}

        <div className="MenuModal" style={{visibility: !!currentItem? '':'hidden'}}>
            <img src={items[currentItem].image}/>

            {items[currentItem].closable && <button onClick={close}> Закрыть </button>}
            {items[currentItem].selectable && <button onClick={close}> Выбрать </button>}
            {items[currentItem].playable && <button onClick={close}> Играть </button>}

        </div>

    </div>

};

export default MenuBox;