import React from 'react';

const Loose = () => {

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
                    Ты не смог излечиться, но не стоит расстраиваться!<br/>
                    Ведь твоя главная награда - знания которые ты получил(а) в процессе игры!<br/><br/>
                    Спасибо за прохождение!<br/>

                    В случае победы с вами свяжутся.
                </div>
            </div>
        </div>
    )
};

export default Loose;