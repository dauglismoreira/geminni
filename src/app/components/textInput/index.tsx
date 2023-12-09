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
  placeholder: string
}

export const TextInput = ({id, placeholder, label, sendInput, disabled, errors}: TextInputProps) => {
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

      <input
        id={id}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={e => handleChange(e.target.value)}
        disabled={disabled}
      ></input>

      {errors && Object.entries(errors)
        .map((item, key) => <ErrorMessage key={`small-${key}`} message={item[1]} />)}

    </fieldset>
  );
};