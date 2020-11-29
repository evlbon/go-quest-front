import React from 'react';
import InputMask from "react-input-mask";

export const InputDate = ({name, label}) => {
    return (
        <div>
            <div>{label}</div>
            <InputMask
                mask="99.99.9999"
                name={name}
                pattern="\d{2}.\d{2}.\d{4}"
                minLength="10"
                required
            />
        </div>
    )
}