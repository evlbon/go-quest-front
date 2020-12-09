import React, {useEffect, useState} from 'react';
import MenuItem from "./MenuItem";
import {useArraySelect} from "../../utils/useArraySelect";

const MenuBox = ({items, defCurrentItem=null, selectedItems, onSelect}) => {
    const [currentItem, setCurrentItem] = useState(defCurrentItem);

    useEffect(()=>{
        setCurrentItem(defCurrentItem)
    },[defCurrentItem])

    const close = () => setCurrentItem(null)

    const choose = (index) => setCurrentItem(index)

    return <div
        className="MenuBox"
    >
        {items.map((item,index) => <MenuItem
            isSelected={selectedItems.includes(item.id)}
            key={index}
            onClick={choose.bind(null, index)}

            {...item}
            />)}

        {currentItem !==null &&
        <div className="MenuModal">
            <img src={items[currentItem].image}/>

            <div className="MenuModal-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate dicta dignissimos illo illum modi nobis sit vitae. Autem consequuntur culpa doloribus iusto laudantium perspiciatis unde voluptatem voluptatum. Harum, vero!
            </div>

            <div className="MenuModal-buttons">
                {items[currentItem].closable && <button onClick={close}> Закрыть </button>}
                {items[currentItem].selectable && <button onClick={()=>{onSelect(items[currentItem].id); setCurrentItem(null)}}> Выбрать </button>}
                {items[currentItem].play && <button onClick={items[currentItem].play}> Играть </button>}
            </div>

        </div>
        }

    </div>

};

export default MenuBox;