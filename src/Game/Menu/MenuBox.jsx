import React, {useEffect, useState} from 'react';
import MenuItem from "./MenuItem";

const MenuBox = ({items, defCurrentItem=null}) => {
    const [currentItem, setCurrentItem] = useState(defCurrentItem)
    useEffect(()=>{
        console.log('asdasdasd')
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

        {currentItem !==null &&
        <div className="MenuModal">
            <img src={items[currentItem].image}/>

            {items[currentItem].closable && <button onClick={close}> Закрыть </button>}
            {items[currentItem].selectable && <button onClick={close}> Выбрать </button>}
            {items[currentItem].play && <button onClick={items[currentItem].play}> Играть </button>}

        </div>
        }

    </div>

};

export default MenuBox;