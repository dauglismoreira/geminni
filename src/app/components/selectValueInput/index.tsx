'use client';

import { useState } from 'react';
import './styles.css';

interface ErrorProps {
    error:string;
}
  
interface SelectValueProps {
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

export const SelectValueInput = ({param, numberValue, label, options,defaultOption, sendInput, id, old}: SelectValueProps) => {
    const [inputValue, setInputValue] = useState<string>(old || '');

    function handleChange(value: string) {
        setInputValue(value)
    
        if(value.startsWith('Acima')){
            sendInput({
                name: 'max_value',
                value: value.replace(/\D+/g, '')
              })
              sendInput({
                name: id,
                value: ''
              })
        }else{
            sendInput({
                name: id,
                value: value.replace(/\D+/g, '')
              })
              sendInput({
                name: 'max_value',
                value: ''
              })
        }
      }

    return(
        <div className="select-container">
            <label>{label}</label>
            <div className="container-input">
                <select value={inputValue} onChange={e => handleChange(e.target.value)}>
                    {defaultOption && <option value={defaultOption.slug}>{defaultOption.name_pt_br}</option>}
                    {options?.map((option : any, index : number) => (
                        <option key={index} value={
                            param ? option[param] : option.name_pt_br
                        }>{option.name_pt_br}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}