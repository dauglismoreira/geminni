'use client';

import { useEffect } from 'react'
import './styles.css'
import useFields from '@/app/hooks/useFields'
import { SelectInput } from '../selectInput';
import { TextSearchInput } from '../textSearchInput';

interface BlogFiltersProps {
    data:any;
    fetchDataFields: (fields: any) => void;
}

export default function BlogFilters({data, fetchDataFields}:BlogFiltersProps) {

    const {fields, handleFields} = useFields({
        region: '',
        search: '',
    })

    useEffect(() => {
        fetchDataFields(fields);
    }, [fields])

  return (
    <div className="filter-blog">
        <SelectInput
            id={'region'}
            sendInput={handleFields}
            label={'Região'}
            old={fields.region}
            defaultOption={{name_pt_br:'Todas regiões', slug:''}}
            options={
                data.configs.filter((configs:any) => configs.key === 'region')[0].enumeration.items}
        />
        <TextSearchInput
            id='search'
            label={''}
            old={fields.search}
            placeholder='O que você procura?'
            className="bg-ultralight"
            sendInput={handleFields}
        />
    </div>
  )
}
