import './styles.css'
import {useState} from 'react';
import ErrorMessage from "./../error";


interface EmailInputProps {
  id: string
  label?: string
  sendInput: (input: { name: string; value: string }) => void
  errors?: object
  disabled?: boolean
  placeholder?:string
}

export const EmailInput = ({id, placeholder, label, sendInput, errors, disabled = false}: EmailInputProps) => {
  const [inputValue, setInputValue] = useState('')

  function handleChange(value: string) {
    setInputValue(value)

    sendInput({
      name: id,
      value: value
    })
  }

  const isEmailValid = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const [isInvalid, setIsInvalid] = useState(false);

  const handleBlur = () => {
    setIsInvalid(inputValue ? !isEmailValid(inputValue) : false);
  };

  return (
    <fieldset>
      {label && <label>{label}</label>}

      <input
        id={id}
        type="email"
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={e => handleChange(e.target.value)}
        onBlur={handleBlur}
      />

      {isInvalid && <ErrorMessage message={'Insira um e-mail válido.'} />}

      {errors && Object.entries(errors)
        .map((item, key) => <ErrorMessage key={`small-${key}`} message={item[1]} />)}
    </fieldset>
  );
};