import React from 'react';

export const Input = ({label, name, onChange}) => {
    return (
        <div>
            <div>{label}</div>
            <input onChange={onChange} required name={name}/>
        </div>
    )
}