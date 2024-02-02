import './styles.css'
import {useEffect, useState} from 'react';
import ErrorMessage from "../error";
import { IoSearchOutline } from 'react-icons/io5';

interface ErrorProps {
  error:string;
}

interface TextInputProps {
  id: string
  label?: string
  sendInput: (input: { name: string; value: string }) => void
  errors?: ErrorProps
  disabled?: boolean
  old?: any
  placeholder: string
  className?:string
  clear?:boolean
}

export const TextSearchInput = ({id, clear, className, placeholder, label, sendInput, disabled, errors, old}: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string>(old || '');

  function handleChange(value: string) {
    setInputValue(value)

    sendInput({
      name: id,
      value: value
    })
  }

  useEffect(() => {
    if(clear){
      handleChange('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clear])

  return (
    <fieldset className={className}>
      {label && <label>{label}</label>}

      <div className={`full-search-bar`}>
        <input
          id={id}
          type="text"
          value={inputValue}
          placeholder={placeholder}
          className={className}
          onChange={e => handleChange(e.target.value)}
          disabled={disabled}
        />
        <IoSearchOutline />
      </div>

      {errors && Object.entries(errors)
        .map((item, key) => <ErrorMessage key={`small-${key}`} message={item[1]} />)}

    </fieldset>
  );
};