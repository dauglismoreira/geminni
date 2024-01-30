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
    defaultOption?:{
        name_pt_br:string;
        slug:string;
    }
    old?:any
    options:{
        name_pt_br:string;
        slug:string;
    }[];
}

export const SelectInput = ({label, options,defaultOption, sendInput, id, old}: SelectProps) => {
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
                    {defaultOption && <option value={defaultOption.slug}>{defaultOption.name_pt_br}</option>}
                    {options.map((option : any, index : number) => (
                        <option key={index} value={option.slug ? option.slug : option.link}>{option.name_pt_br}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}