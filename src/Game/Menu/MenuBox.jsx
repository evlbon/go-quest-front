import React, {useEffect, useState} from 'react';
import MenuItem from "./MenuItem";
import {useArraySelect} from "../../utils/useArraySelect";

const MenuBox = ({items, defCurrentItem = null, selectedItems, onSelect}) => {
    const [currentItem, setCurrentItem] = useState(defCurrentItem);

    useEffect(() => {
        setCurrentItem(defCurrentItem)
    }, [defCurrentItem])

    const close = () => setCurrentItem(null)

    const choose = (index) => setCurrentItem(index)

    return (
        <>
            <div
                className="MenuBox"
            >
                {!items.length && <div className="woman">Нет воспоминаний связанных с этим именем</div>}
                {items && items.map((item, index) => <MenuItem
                    isSelected={selectedItems && selectedItems.includes(item.id)}
                    key={index}
                    onClick={choose.bind(null, index)}

                    {...item}
                />)}
            </div>
            {currentItem !==null &&
            <div className="MenuModal">
                <img src={items[currentItem].image}/>

                <div className="MenuModal-content">
                    {items[currentItem].description}
                </div>

                <div className="MenuModal-buttons">
                    {items[currentItem].closable && <button onClick={close}> Закрыть </button>}
                    {items[currentItem].selectable && <button onClick={()=>{onSelect(items[currentItem].id); setCurrentItem(null)}}>{selectedItems.includes(items[currentItem].id)?'Отменить выбор':'Выбрать'}</button>}
                    {items[currentItem].play && <button onClick={items[currentItem].play}> Играть </button>}
                </div>

            </div>
            }
        </>
    )
};

export default MenuBox;