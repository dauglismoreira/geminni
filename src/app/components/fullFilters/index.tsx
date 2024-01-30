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
}

export default function FullFilters({data}: FullFiltersProps) {
    const {isLargeScreen} = useScreenSize(1024);
    const [ moreFilters, setMoreFilters] = useState(false)

    const {fields, handleFields} = useFields({
        region: '',
        type: '',
        status: '',
        rooms:'',
        price:'',
        order:'',
        suites:'',
        garage:'',
        sala_de_estar:'',
        chuveiro_a_gas:'',
        sacada:'',
        area_de_servico:'',
        lavabo:'',
        living:'',
    })

    useEffect(() => {
        console.log(fields)
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
                options={
                    data.configs.filter((configs:any) => configs.key === 'region')[0].enumeration.items
                    // [{label:'Todas regiões', value:''}, {label:'teste', value:'teste'}]
                }
            />
            {isLargeScreen && <SelectInput
                id={'type'}
                sendInput={handleFields}
                label={'Tipo de imóvel'}
                old={fields.type}
                options={
                    data.configs.filter((configs:any) => configs.key === 'localization-type')[0].enumeration.items
                    // [{label:'Todos tipos', value:''}, {label:'teste', value:'teste'}]
                }
            />}
            {isLargeScreen && <SelectInput
                id={'status'}
                sendInput={handleFields}
                label={'Status do imóvel'}
                old={fields.status}
                options={
                    data.configs.filter((configs:any) => configs.key === 'state-property')[0].enumeration.items
                    // [{label:'Todos status', value:''}, {label:'teste', value:'teste'}]
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
                id={'price'}
                sendInput={handleFields}
                label={'Qual o preço'}
                old={fields.price}
                options={
                    data.configs.filter((configs:any) => configs.key === 'range-values')[0].enumeration.items
                    // [{label:'Todos preços', value:''}, {label:'teste', value:'teste'}]
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
        <MoreFilterModal open={moreFilters ? 'open' : ''} handleFields={handleFields} fields={fields} setMoreFilters={setMoreFilters} />
    </div>
  )
}
