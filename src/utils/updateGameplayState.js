import React from 'react';
import { useState } from "react";

export function useGameplayState(){
    const [value, setValue] = useState(0);
    return [value, () => setValue(value => ++value)];
}