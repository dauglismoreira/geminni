'use client';

import { useState } from 'react';
import './styles.css';

interface ErrorProps {
    error:string;
}
  
interface CheckBoxProps {
    id: string
    label?: string
    sendInput: (input: { name: string; value: string }) => void
    errors?: ErrorProps
    disabled?: boolean
    old?:any
    placeholder?: string
}

export const CheckBoxInput = ({label, sendInput, id, old}: CheckBoxProps) => {
    const [inputValue, setInputValue] = useState<string>(old || '');

    console.log(old)

    function handleChange() {
        const newValue = inputValue === '1' ? '0' : '1';
        setInputValue(newValue);
    
        sendInput({
          name: id,
          value: newValue,
        });
      }

    return(
        <div className="checkbox-container">
            <input 
                id={id}
                checked={inputValue === '1'}
                onChange={handleChange}
                type="checkbox"
            ></input>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}