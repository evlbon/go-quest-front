import React from 'react';
import './WomanSelector.css'

const WomanSelector = ({onChange}) => {
    return (
        <div className="WomanSelector-box">
            <select className="WomanSelector" onChange={e => onChange(e.target.value)}>

                <option>Выберите имя женщины</option>
                <option>Саша</option>
                <option>Катя</option>
                <option>Алена</option>
                <option>Лиля</option>
                <option>Лера</option>
                <option>Вероника</option>
            </select>

            <img src="menu-head2.png"/>

            </div>
    )
};

export default WomanSelector;