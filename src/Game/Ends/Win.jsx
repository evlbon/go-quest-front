import React from 'react';

const Win = () => {

    return(
        <div className="Menu"
             style={{backgroundImage: 'url(/menu_back.png)'}}
        >

            <div className="Menu-header">
                <img src={'/menu-head.png'}/>
            </div>

            {/*<div style={{height: '30%'}}>{info.message}</div>*/}
            <div
                className="MenuBox"
            >
                <div className="woman">
                    Поздравляем, ты смог излечиться!<br/>
                    Спасибо за прохождение!<br/><br/>

                    В случае победы с вами свяжутся.

                </div>
            </div>
        </div>
    )
};

export default Win;