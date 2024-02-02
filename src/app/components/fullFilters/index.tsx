'use client';

import { useEffect, useState } from 'react'
import './styles.css'
import useFields from '@/app/hooks/useFields'
import { SelectInput } from '../selectInput';
import { NumberToogleInput } from '../numberToogleInput';
import MoreFilterModal from '../moreFiltersModal';
import useScreenSize from '@/app/hooks/useScreenSize';
import {orderOptions} from '@/app/imoveis/mock';
import { SelectOrderInput } from '../selectOrderInput';
import { SelectValueInput } from '../selectValueInput';

interface FullFiltersProps {
    data:any;
    fetchDataFields: (fields: any) => void;
}

export default function FullFilters({data, fetchDataFields}: FullFiltersProps) {
    const {isLargeScreen} = useScreenSize(1024);
    const [ moreFilters, setMoreFilters] = useState(false)

    const advanced = data.filter((configs:any) => configs.name === 'Filtro avançado')[0]
    const fast = data.filter((configs:any) => configs.name === 'Filtro rápido')[0]

    const getUrlParam = (name: string): string | null => {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get(name);
      };

    const {fields, handleFields} = useFields({
        search: getUrlParam('search') || '',
        residential_characteristic_ids: getUrlParam('residential_characteristic_ids') || '',
        property_characteristics: getUrlParam('property_characteristics') || '',
        enterprise_characteristics: getUrlParam('enterprise_characteristics') || '',
        accept_pets: getUrlParam('accept_pets') || '',
        property_type: getUrlParam('property_type') || '',
        region: getUrlParam('region') || '',
        property_status: getUrlParam('property_status') || '',
        localization_type: getUrlParam('localization_type') || '',
        suites: getUrlParam('suites') || '',
        rooms: getUrlParam('rooms') || '',
        bathrooms: getUrlParam('bathrooms') || '',
        parking_spaces: getUrlParam('parking_spaces') || '',
        min_value: getUrlParam('min_value') || '',
        highlight: getUrlParam('highlight') || '',
        order: '',
        by: '',
    })

    const handleCheckPropFields = (item: any) => {
        const currentValue: string = typeof fields.property_characteristics === 'string'
            ? fields.property_characteristics
            : '';
    
        const currentValueArray: string[] = currentValue.split(',');
    
        const updatedValueArray = item.value === '1'
            ? [...currentValueArray, item.name.toString()]
            : currentValueArray.filter(val => val !== item.name.toString());
    
            const updatedValueArrayFiltered = Array.from(new Set(updatedValueArray.filter(Boolean)));

            const updatedValue: string = updatedValueArrayFiltered.join(',');
    
        handleFields({
            name: 'property_characteristics',
            value: updatedValue || '',
        });
    };

    const handleCheckEntFields = (item: any) => {
        const currentValue: string = typeof fields.enterprise_characteristics === 'string'
            ? fields.enterprise_characteristics
            : '';
    
        const currentValueArray: string[] = currentValue.split(',');
    
        const updatedValueArray = item.value === '1'
            ? [...currentValueArray, item.name.toString()]
            : currentValueArray.filter(val => val !== item.name.toString());
    
            const updatedValueArrayFiltered = Array.from(new Set(updatedValueArray.filter(Boolean)));

            const updatedValue: string = updatedValueArrayFiltered.join(',');
    
        handleFields({
            name: 'enterprise_characteristics',
            value: updatedValue || '',
        });
    };

    useEffect(() => {
        fetchDataFields(fields);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fields])

    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) {
            if (moreFilters) {
                const originalOverflow = htmlElement.style.overflow;
                htmlElement.style.overflow = 'hidden';
                return () => {
                    htmlElement.style.overflow = originalOverflow;
                };
            } else {
                htmlElement.style.overflow = '';
            }
        }
    }, [moreFilters]);

  return (
    <div className="filter-container">
        <div className="filter-container-high">
            <SelectInput
                id={'region'}
                sendInput={handleFields}
                label={fast.configs.filter((configs:any) => configs.key === 'region')[0].value}
                old={fields.region}
                defaultOption={{name_pt_br:'Todas regiões', slug:''}}
                options={
                    fast.configs.filter((configs:any) => configs.key === 'region')[0]?.enumeration.items
                }
            />
            {isLargeScreen && <SelectInput
                id={'property_type'}
                sendInput={handleFields}
                label={advanced.configs.filter((configs:any) => configs.key === 'property_type')[0].value}
                old={fields.property_type}
                defaultOption={{name_pt_br:'Todos tipos', slug:''}}
                options={
                    advanced.configs.filter((configs:any) => configs.key === 'property_type')[0]?.enumeration.items
                }
            />}
            {isLargeScreen && <SelectInput
                id={'property_status'}
                sendInput={handleFields}
                label={'Status do imóvel'}
                old={fields.property_status}
                defaultOption={{name_pt_br:'Todos status', slug:''}}
                options={
                    fast.configs.filter((configs:any) => configs.key === 'property_status')[0]?.enumeration.items
                }
            />}
            {isLargeScreen && <NumberToogleInput
                id={'rooms'}
                sendInput={handleFields}
                label={advanced.configs.filter((configs:any) => configs.key === 'rooms')[0].value}
                old={fields.rooms}
                options={
                    advanced.configs.filter((configs:any) => configs.key === 'rooms')[0]?.enumeration.items
                }       
            />}
            {isLargeScreen && <SelectValueInput
                id={'min_value'}
                sendInput={handleFields}
                label={fast.configs.filter((configs:any) => configs.key === 'min_value')[0].value}
                old={fields.min_value}
                numberValue={true}
                defaultOption={{name_pt_br:'Todos preços', slug:''}}
                options={
                    fast.configs.filter((configs:any) => configs.key === 'min_value')[0]?.enumeration.items
                }
            />}
            {isLargeScreen && <SelectOrderInput
                id={'order'}
                sendInput={handleFields}
                label={'Ordenar por'}
                param='slug'
                old={fields.order}
                options={orderOptions}
            />}
            <button onClick={() => setMoreFilters(true)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18V16H9V18H3ZM3 13V11H15V13H3ZM3 8V6H21V8H3Z" fill="#FAF8F7"/>
                </svg>
                Mais filtros</button>
        </div>
        <MoreFilterModal
            advanced={advanced}
            fast={fast}
            open={moreFilters ? 'open' : ''}
            handleFields={handleFields}
            handleCheckPropFields={handleCheckPropFields}
            handleCheckEntFields={handleCheckEntFields}
            fields={fields}
            setMoreFilters={setMoreFilters}
        />
    </div>
  )
}
