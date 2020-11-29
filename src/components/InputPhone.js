import React from 'react';
import InputMask from "react-input-mask";

export const InputPhone = ({name, label, onChange, hasError}) => {
    return (
        <div>
            <div>{label}</div>
            <InputMask
                onChange={onChange}
                mask="+7\(999)999-99-99"
                name={name}
                pattern="[\+]\d{1}[\(]\d{3}[\)]\d{3}[\-]\d{2}[\-]\d{2}"
                minLength="16"
                required
            />
            {hasError &&
            <div style={{height: 3, background: 'red', width: '100%'}}>

            </div>}
        </div>
    )
}