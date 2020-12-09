import React from "react";
import MenuBox from "./MenuBox";
import './MenuBox.css';
import './Menu.css';
import {useArraySelect} from "../../utils/useArraySelect";

const Menu = ({items, defCurrentItem, onSelectEnd, needSelect}) => {
    const [selectedItems, selectItem] = useArraySelect(needSelect);

    return (
        <div className="Menu"
             style={{backgroundImage: 'url(/menu_back.png)'}}
        >

                <div className="Menu-header">
                    {!!onSelectEnd && needSelect && needSelect !==2? <div className="menuCounterHead">

                        <div className="menuCounter">
                            {selectedItems.length}/{needSelect}
                        </div>
                        <button
                            disabled={selectedItems.length<needSelect}
                            onClick={()=>onSelectEnd(selectedItems)}>Подтвердить свой выбор</button>

                    </div>:<img src={'/menu-head.png'}/>
                    }

                </div>

            {/*<div style={{height: '30%'}}>{info.message}</div>*/}
            <MenuBox onSelect={selectItem} selectedItems={selectedItems} items={items} defCurrentItem={defCurrentItem}/>
        </div>
    )
}

export default Menu;