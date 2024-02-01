'use client';

import { useState } from 'react';
import './styles.css';

interface ErrorProps {
    error:string;
}
  
interface SelectOrderProps {
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
    numberValue?:boolean
    param?:string
    options:{
        name_pt_br:string;
        slug:string;
    }[];
}

export const SelectOrderInput = ({param, numberValue, label, options,defaultOption, sendInput, id, old}: SelectOrderProps) => {
    const [inputValue, setInputValue] = useState<string>(old || '');

    function handleChange(value: string) {
        setInputValue(value);
    
        const paramsObject = Object.fromEntries(value.split(/[&=]/).map((part, index, array) => (index % 2 === 0) ? [] : array.slice(index - 1, index + 1)));
    
        const orderValue = paramsObject['order'];
        const byValue = paramsObject['by'];
    
        sendInput({
            name: id,
            value: orderValue || ''
        });
    
        sendInput({
            name: 'by',
            value: byValue || ''
        });
    }

    return(
        <div className="select-container">
            <label>{label}</label>
            <div className="container-input">
                <select value={inputValue} onChange={e => handleChange(e.target.value)}>
                    {defaultOption && <option value={defaultOption.slug}>{defaultOption.name_pt_br}</option>}
                    {options?.map((option : any, index : number) => (
                        <option key={index} value={
                            param ? option[param] : numberValue ? parseInt(option.name_pt_br.replace(/\D+/g, '')) : option.name_pt_br
                        }>{option.name_pt_br}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}