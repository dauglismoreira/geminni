'use client';

import useFields from '@/app/hooks/useFields'
import './styles.css'
import { EmailInput } from '../emailInput';
import { TextInput } from '../textInput';
import { TextAreaInput } from '../textAreaInput';
import { PhoneInput } from '../phoneInput';
import { useEffect, useState } from 'react';
import { SelectInput } from '../selectInput';

interface ContactFormProps{
    data?:any;
    id?:number;
    style?:string;
    accept?:any;
}

export default function ContactForm({data, accept, id, style} : ContactFormProps) {

    const [acceptTems, setAcceptTerms] = useState(false)

    const {fields, handleFields} = useFields({
        interest:data ? data[0]?.name : '',
        name: '',
        email: '',
        phone:'',
        message:'',
    })

    useEffect(() => {
        console.log(fields)
    }, [fields])

    return (
        <form className={`${style}`}>
            {data && <div className="form-row">
                <div className="form-col">
                    {data?.map((select: any, index: number) => (
                        <SelectInput
                            key={index}
                            id="interest"
                            label={select?.name}
                            options={select.options}
                            sendInput={handleFields}
                        />
                    ))}
                </div>
            </div>}
            <div className="form-row">
                <div className="form-col">
                    <TextInput
                        id='name'
                        label={'Nome'}
                        placeholder='Digite seu nome'
                        sendInput={handleFields}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-col">
                    <EmailInput
                        id='email'
                        label={'Email'}
                        placeholder='Digite seu email'
                        sendInput={handleFields}
                    />
                </div>
                <div className="form-col">
                    <PhoneInput
                        id='phone'
                        label={'Telefone'}
                        sendInput={handleFields}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-col">
                    <TextAreaInput
                        id='message'
                        label={'Mensangem'}
                        placeholder='Digite sua mensagem'
                        sendInput={handleFields}
                    />
                </div>
            </div>
            <div className="form-row checkbox">
                <div className="checkbox-input">
                    <input
                        type='checkbox'
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                    ></input>
                    {accept && <label dangerouslySetInnerHTML={{ __html: accept.long_text_pt_br }} />}
                </div>
                {acceptTems ?
                    <button>Enviar Mensagem</button>
                    :
                    <button disabled>Enviar Mensagem</button>
                }
            </div>
        </form>
    )
}
