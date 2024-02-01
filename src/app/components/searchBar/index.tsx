'use client';

import useFields from '@/app/hooks/useFields';
import { LinkButton } from '../linkButton';
import { SelectInput } from '../selectInput';
import './styles.css';
import { TextSearchInput } from '../textSearchInput';
import { useEffect, useState } from 'react';
import { SelectValueInput } from '../selectValueInput';
import fetchData from '@/app/helpers/fetchData';
import { PropertyMiniCard } from '../propertyMiniCard';
import {useRef} from 'react'

interface selectProps {
    name?:string;
    options:{
        label:string;
        value:string;
    }[];
}

interface SearchBarProps {
    data?:any;
}

export const SearchBar = ({data}: SearchBarProps) => {

    const [filter, setFilter] = useState('')
    const [properties, setProperties] = useState([])
    const [totalProperties, setTotalProperties] = useState(0)
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    const getUrlParam = (name: string): string | null => {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get(name);
      };

    const {fields, handleFields} = useFields({
        search: '',
        min_value: '',
        region: '',
        property_type: '',
        property_status: '',
    })

    useEffect(() => {
        const queryString = Object.entries(fields)
            .filter(([_, value]) => value !== '')
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join('&');
    
        setFilter(queryString);
    }, [fields]);

    useEffect(() => {
        if(fields.search !== ''
        || fields.min_value !== ''
        || fields.region !== ''
        || fields.property_type !== ''
        || fields.property_status !== ''){
            fetchData(`property?page=1&${filter}`)
            .then(response => {
                setProperties(response.data.properties.data)
                setTotalProperties(response.data.properties.total)
            })
        }else{
            setProperties([])
            setTotalProperties(0)
        }
    }, [filter])

    const advanced = data.filter((configs:any) => configs.name === 'Filtro avançado')[0]
    const fast = data.filter((configs:any) => configs.name === 'Filtro rápido')[0]

    return(
        <div className={`search-bar-container ${properties.length > 0 ? 'expand' : ''}`}>
            <div className="search-bar-results">
                {properties.length > 0 ? properties.slice(0, 5).map((property, index) => (
                    <PropertyMiniCard key={index} data={property}/>
                )) : <p>Não foram encontrados resultados.</p>}
            </div>
            <div className="search-more-results">
                <LinkButton
                    text={`Ver todos os resultados ${totalProperties > 0 ? '(' + totalProperties + ')' : ''}`}
                    link={`/imoveis`}
                    params={filter}
                    color={`bg-primary text-white`}
                    hover={`hover:bg-soft hover:text-white`}
                />
            </div>
            <div className="search-bar-title">
                <TextSearchInput
                    id='search'
                    label={''}
                    old={fields.search}
                    className='full-search'
                    placeholder='Procure por nossos imóveis selecionados'
                    sendInput={handleFields}
                />
            </div>
            <div className="search-bar-inputs">
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
                <SelectInput
                    id={'property_type'}
                    sendInput={handleFields}
                    label={advanced.configs.filter((configs:any) => configs.key === 'property_type')[0].value}
                    old={fields.property_type}
                    defaultOption={{name_pt_br:'Todos tipos', slug:''}}
                    options={
                        advanced.configs.filter((configs:any) => configs.key === 'property_type')[0]?.enumeration.items
                    }
                />
                <SelectInput
                    id={'property_status'}
                    sendInput={handleFields}
                    label={fast.configs.filter((configs:any) => configs.key === 'property_status')[0].value}
                    old={fields.property_status}
                    defaultOption={{name_pt_br:'Todos status', slug:''}}
                    options={
                        fast.configs.filter((configs:any) => configs.key === 'property_status')[0]?.enumeration.items
                    }
                />
                <SelectValueInput
                    id={'min_value'}
                    sendInput={handleFields}
                    label={fast.configs.filter((configs:any) => configs.key === 'min_value')[0].value}
                    old={fields.min_value}
                    defaultOption={{name_pt_br:'Todos preços', slug:''}}
                    options={
                        fast.configs.filter((configs:any) => configs.key === 'min_value')[0]?.enumeration.items
                    }
                />
                {/* <LinkButton
                    text="Procurar"
                    link={`/imoveis?page=1&${filter}`}
                    color={`bg-primary text-white`}
                    hover={`hover:bg-soft hover:text-white`}
                /> */}
            </div>
        </div>
    )
}