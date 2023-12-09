'use client';

import { useState } from 'react';
import './styles.css';

interface ErrorProps {
    error:string;
}
  
interface SelectProps {
    id: string
    label?: string
    sendInput: (input: { name: string; value: string }) => void
    errors?: ErrorProps
    disabled?: boolean
    placeholder?: string
    old?:any
    options:{
        label:string;
        value:string;
    }[];
}

export const SelectInput = ({label, options, sendInput, id, old}: SelectProps) => {
    const [inputValue, setInputValue] = useState<string>(old || '');

    function handleChange(value: string) {
        setInputValue(value)
    
        sendInput({
          name: id,
          value: value
        })
      }

    return(
        <div className="select-container">
            <label>{label}</label>
            <div className="container-input">
                <select value={inputValue} onChange={e => handleChange(e.target.value)}>
                    {options.map((option : any, index : number) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}