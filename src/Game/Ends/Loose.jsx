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

                    Поздравляем, вы прошли квест!
                    {/*и набрали xxx баллов, за xx минут хх секунд.*/}
                    <br/><br/>

                    Мы ждём завершения квеста другими участниками и подводим итоги.<br/>
                    Таблица победителей появится на этой страничке 17 декабря.

                </div>
            </div>
        </div>
    )
};

export default Loose;