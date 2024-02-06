'use client';

import useFields from '@/app/hooks/useFields'
import './styles.css'
import { EmailInput } from '../emailInput';
import { TextInput } from '../textInput';
import { TextAreaInput } from '../textAreaInput';
import { PhoneInput } from '../phoneInput';
import { useEffect, useState } from 'react';
import { SelectInput } from '../selectInput';
import Swal from 'sweetalert2'
import ReCAPTCHA from "react-google-recaptcha";
import postData from '@/app/helpers/fetchPost';
import fetchData from '@/app/helpers/fetchData';

interface ContactFormProps{
    data?:any;
    id?:number;
    style?:string;
    accept?:any;
    property_id?:number
    origin_page:string
    department:string
    recapKey?:string
}

export default function ContactForm({data, recapKey, property_id, origin_page, department, accept, id, style} : ContactFormProps) {
    const [recaptchaValue, setRecaptchaValue] = useState<any>(null);
    const [acceptTerms, setAcceptTerms] = useState(false)

    const {fields, handleFields} = useFields({
        interest:'',
        name: '',
        email: '',
        phone:'',
        message:'',
    })

    const sendMessage = (e:any) => {
        e.preventDefault()
        
        const newFields = {
            origin_page: origin_page,
            department: department,
            email: fields.email,
            name: fields.name,
            phone: fields.phone,
            message: fields.message,
            interest: fields.interest,
            property_id: property_id ? property_id : null
        }
        postData('contact/send', newFields)
        .then(response => {
            Swal.fire({
                title: response.success,
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
              })
              setTimeout(() => {
                    window.location.reload()
              }, 1300);
        }).catch(error => {
          
            Swal.fire({
              title: error.message,
              html: formatErrorMessages(error.errors),
              icon: 'error',
              showConfirmButton: false,
              timer: 2500,
            })
          
        })
    }

    function formatErrorMessages(errors:any) {
        let errorMessageHtml = '<div>';
      
        for (const key in errors) {
          if (errors.hasOwnProperty(key)) {
            errorMessageHtml += `<div><strong>${key}:</strong> ${errors[key]}</div>`;
          }
        }
      
        errorMessageHtml += '</div>';
      
        return errorMessageHtml;
      }

    return (
        <form className={`${style}`}>
            {data && <div className="form-row">
                <div className="form-col">
                    {data?.map((select: any, index: number) => (
                        <SelectInput
                            key={index}
                            id="interest"
                            label={select?.name}
                            defaultOption={{name_pt_br:'Selecione', slug:''}}
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

            {recapKey &&
                <ReCAPTCHA
                    sitekey={recapKey}
                    onChange={(value) => setRecaptchaValue(value)}
                />
            }

            <div className="form-row checkbox">
                <div className="checkbox-input">
                    <input
                        type='checkbox'
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                    ></input>
                    {accept && <label dangerouslySetInnerHTML={{ __html: accept?.description ?? '<div></div>' }} />}
                </div>
                {(acceptTerms && recaptchaValue) ?
                    <button className="accept" onClick={(e) => sendMessage(e)}>Enviar Mensagem</button>
                    :
                    <button disabled>Enviar Mensagem</button>
                }
            </div>
        </form>
    )
}
