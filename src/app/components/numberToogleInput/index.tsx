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
    old?:any
    placeholder?: string
    options:string[];
}

export const NumberToogleInput = ({label, options, sendInput, id, old}: SelectProps) => {
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
            <div className="container-options">
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleChange(option)}
                        className={`option ${inputValue === option && 'active'}`}
                    >{option}</div>
                ))}
            </div>
        </div>
    )
}