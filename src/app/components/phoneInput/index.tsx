import './styles.css'
import {useState} from 'react';
import ErrorMessage from "../error";

interface ErrorProps {
  error:string;
}

interface PhoneInputProps {
  id: string
  label?: string
  sendInput: (input: { name: string; value: string }) => void
  errors?: ErrorProps
  disabled?: boolean
  placeholder?: string;
}

export const PhoneInput = ({id, placeholder, label, sendInput, disabled, errors}: PhoneInputProps) => {
  const [inputValue, setInputValue] = useState<string>('+55');

  function handleChange(value: string) {
    const numericValue = value.replace(/\D/g, '');
  
    if (!numericValue) {
      setInputValue('');
      sendInput({
        name: id,
        value: '',
      });
      return;
    }
  
    let maskedValue = `+${numericValue.slice(0, 2)}`;
    if (numericValue.length > 2) {
      maskedValue += ` (${numericValue.slice(2, 4)}`;
      if (numericValue.length > 4) {
        maskedValue += `) ${numericValue.slice(4, 5)}`;
        if (numericValue.length > 5) {
          maskedValue += `.${numericValue.slice(5, 9)}`;
          if (numericValue.length > 9) {
            maskedValue += `-${numericValue.slice(9, 13)}`;
          }
        }
      }
    }
  
    setInputValue(maskedValue);
    const inputElement = document.getElementById(id) as HTMLInputElement;
  
    if (inputElement) {
      const lastTypedChar = value.slice(-1);
      if (lastTypedChar === ' ' || lastTypedChar === ')') {
        const cursorPosition = inputElement.selectionStart || 0;
        inputElement.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
      }
    }
  
    sendInput({
      name: id,
      value: maskedValue,
    });
  }

  return (
    <fieldset>
      {label && <label>{label}</label>}

      <input
        id={id}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={e => handleChange(e.target.value)}
        disabled={disabled}
      ></input>


      {errors && Object.entries(errors)
        .map((item, key) => <small key={`small-${key}`}>{item[1]}</small>)}

    </fieldset>
  );
};