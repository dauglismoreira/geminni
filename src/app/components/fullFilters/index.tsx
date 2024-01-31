'use client';

import { useEffect, useState } from 'react'
import './styles.css'
import useFields from '@/app/hooks/useFields'
import { SelectInput } from '../selectInput';
import { NumberToogleInput } from '../numberToogleInput';
import MoreFilterModal from '../moreFiltersModal';
import useScreenSize from '@/app/hooks/useScreenSize';

interface FullFiltersProps {
    data:any;
    fetchDataFields: (fields: any) => void;
}

export default function FullFilters({data, fetchDataFields}: FullFiltersProps) {
    const {isLargeScreen} = useScreenSize(1024);
    const [ moreFilters, setMoreFilters] = useState(false)

    const getUrlParam = (name: string): string | null => {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get(name);
      };

    const {fields, handleFields} = useFields({
        search: getUrlParam('search') || '',
        residential_characteristic_ids: getUrlParam('residential_characteristic_ids') || '',
        property_type: getUrlParam('property_type') || '',
        property_characteristics: getUrlParam('property_characteristics') || '',
        enterprise_characteristics: getUrlParam('enterprise_characteristics') || '',
        accept_pets: getUrlParam('accept_pets') || '',
        property_location: getUrlParam('property_location') || '',
        region: getUrlParam('region') || '',
        property_status: getUrlParam('property_status') || '',
        suites: getUrlParam('suites') || '',
        rooms: getUrlParam('rooms') || '',
        bathrooms: getUrlParam('bathrooms') || '',
        parking_spaces: getUrlParam('parking_spaces') || '',
        min_value: getUrlParam('min_value') || 0,
        highlight: getUrlParam('highlight') || '',
    })

    useEffect(() => {
        fetchDataFields(fields);
    }, [fields])

    useEffect(() => {
        const bodyElement = document.querySelector('body');
        if (bodyElement) {
            if (moreFilters) {
                bodyElement.style.overflow = 'hidden';
            } else {
                bodyElement.style.overflow = '';
            }
        }
    }, [moreFilters]);

  return (
    <div className="filter-container">
        <div className="filter-container-high">
            <SelectInput
                id={'region'}
                sendInput={handleFields}
                label={'Região'}
                old={fields.region}
                defaultOption={{name_pt_br:'Todas regiões', slug:''}}
                options={
                    data.configs.filter((configs:any) => configs.key === 'region')[0]?.enumeration.items
                }
            />
            {isLargeScreen && <SelectInput
                id={'property_type'}
                sendInput={handleFields}
                label={'Tipo de imóvel'}
                old={fields.property_type}
                defaultOption={{name_pt_br:'Todos tipos', slug:''}}
                options={
                    data.configs.filter((configs:any) => configs.key === 'localization_type')[0]?.enumeration.items
                }
            />}
            {isLargeScreen && <SelectInput
                id={'property_status'}
                sendInput={handleFields}
                label={'Status do imóvel'}
                old={fields.property_status}
                defaultOption={{name_pt_br:'Todos status', slug:''}}
                options={
                    data.configs.filter((configs:any) => configs.key === 'property_status')[0]?.enumeration.items
                }
            />}
            {isLargeScreen && <NumberToogleInput
                id={'rooms'}
                sendInput={handleFields}
                label={'Quartos'}
                old={fields.rooms}
                options={['1', '2', '3', '4', '5', '+']}        
            />}
            {isLargeScreen && <SelectInput
                id={'min_value'}
                sendInput={handleFields}
                label={'Qual o preço'}
                old={fields.min_value}
                defaultOption={{name_pt_br:'Todos preços', slug:''}}
                options={
                    data.configs.filter((configs:any) => configs.key === 'min_value')[0]?.enumeration.items
                }
            />}
            {isLargeScreen && <SelectInput
                id={'order'}
                sendInput={handleFields}
                label={'Ordenar por'}
                old={fields.order}
                options={
                    [{name_pt_br:'Recente', slug:'recent'}]
                    // [{label:'Recente', value:''}, {label:'teste', value:'teste'}]
                }
            />}
            <button onClick={() => setMoreFilters(true)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18V16H9V18H3ZM3 13V11H15V13H3ZM3 8V6H21V8H3Z" fill="#FAF8F7"/>
                </svg>
                Mais filtros</button>
        </div>
        <MoreFilterModal data={data} open={moreFilters ? 'open' : ''} handleFields={handleFields} fields={fields} setMoreFilters={setMoreFilters} />
    </div>
  )
}
