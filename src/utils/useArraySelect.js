import React, {useState} from 'react';

export function useArraySelect(length) {
    const [array, updateArray] = useState([]);
    return [array, (item) => updateArray(prev => {
        const newArray = [...prev];
        const itemIndex = newArray.findIndex(i => i === item);
        if (itemIndex !== -1) {
            newArray.splice(itemIndex, 1);
        } else {
            if(newArray.length === length) {
                newArray.splice(0, 1);
            }
            newArray.push(item)
        }
        return newArray
    })]
}