'use client';

import { useEffect } from 'react'
import './styles.css'
import useFields from '@/app/hooks/useFields'
import { SelectInput } from '../selectInput';
import { TextSearchInput } from '../textSearchInput';

export default function BlogFilters() {

    const {fields, handleFields} = useFields({
        region: '',
        text: '',
    })

    useEffect(() => {
        console.log(fields)
    }, [fields])


  return (
    <div className="filter-blog">
        <SelectInput
            id={'region'}
            sendInput={handleFields}
            label={'Região'}
            old={fields.region}
            options={[{label:'Todas regiões', value:''}, {label:'teste', value:'teste'}]}
        />
        <TextSearchInput
            id='text'
            label={''}
            old={fields.text}
            placeholder='O que você procura?'
            className="bg-ultralight"
            sendInput={handleFields}
        />
    </div>
  )
}
