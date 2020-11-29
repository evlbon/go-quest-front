import React, {useState} from 'react';
import MenuItem from "./MenuItem";

const MenuBox = () => {
    const [visible, setVisible] = useState(false)

    const hide = () => setVisible(false)

    const show = () => setVisible(true)

    return <div
        className="MenuBox"
    >
        <MenuItem onClick={show}/>
        <MenuItem onClick={show}/>
        <MenuItem onClick={show}/>
        <MenuItem onClick={show}/>
        <MenuItem onClick={show}/>
        <MenuItem onClick={show}/>
        <MenuItem onClick={show}/>



        <div className="MenuModal" style={{visibility: visible? '':'hidden'}}>
            <img src="https://thiscatdoesnotexist.com/"/>
            <button onClick={hide}> Закрыть </button>

        </div>

    </div>

};

export default MenuBox;