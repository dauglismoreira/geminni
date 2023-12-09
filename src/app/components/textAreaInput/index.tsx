import './styles.css'
import {useState} from 'react';
import ErrorMessage from "./../error";

interface ErrorProps {
  error:string;
}

interface TextInputProps {
  id: string
  label?: string
  sendInput: (input: { name: string; value: string }) => void
  errors?: ErrorProps
  disabled?: boolean
  placeholder?:string
}

export const TextAreaInput = ({id, placeholder, label, sendInput, disabled, errors}: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  function handleChange(value: string) {
    setInputValue(value)

    sendInput({
      name: id,
      value: value
    })
  }

  return (
    <fieldset>
      {label && <label>{label}</label>}

      <textarea
        id={id}
        value={inputValue}
        onChange={e => handleChange(e.target.value)}
        disabled={disabled}
        rows={6}
        placeholder={placeholder}
      ></textarea>

      {errors && Object.entries(errors)
        .map((item, key) => <small key={`small-${key}`}>{item[1]}</small>)}

    </fieldset>
  );
};