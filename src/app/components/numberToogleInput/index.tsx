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
    options:{
        name_pt_br:string;
        slug:string;
    }[];
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
                {options?.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleChange(option.name_pt_br)}
                        className={`option ${inputValue === option.name_pt_br && 'active'}`}
                    >{option.name_pt_br}</div>
                ))}
            </div>
        </div>
    )
}