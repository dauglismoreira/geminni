'use client';

import useFields from '@/app/hooks/useFields';
import { LinkButton } from '../linkButton';
import { SelectInput } from '../selectInput';
import './styles.css';
import { TextSearchInput } from '../textSearchInput';

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

    const {fields, handleFields} = useFields({
        region: '',
        type: '',
        status: '',
        price:'',
        search:'',
    })


    console.log(data)

    return(
        <div className="search-bar-container">
            <div className="search-bar-title">
                <TextSearchInput
                    id='text'
                    label={''}
                    old={fields.text}
                    className='full-search'
                    placeholder='Procure por nossos imóveis selecionados'
                    sendInput={handleFields}
                />
            </div>
            <div className="search-bar-inputs">
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
                <SelectInput
                    id={'type'}
                    sendInput={handleFields}
                    label={'Tipo de imóvel'}
                    old={fields.type}
                    options={
                        data.configs.filter((configs:any) => configs.key === 'localization-type')[0].enumeration.items
                        // [{label:'Todos tipos', value:''}, {label:'teste', value:'teste'}]
                    }
                />
                <SelectInput
                    id={'status'}
                    sendInput={handleFields}
                    label={'Status do imóvel'}
                    old={fields.status}
                    options={
                        data.configs.filter((configs:any) => configs.key === 'state-property')[0].enumeration.items
                        // [{label:'Todos status', value:''}, {label:'teste', value:'teste'}]
                    }
                />
                <SelectInput
                    id={'price'}
                    sendInput={handleFields}
                    label={'Qual o preço'}
                    old={fields.price}
                    options={
                        data.configs.filter((configs:any) => configs.key === 'range-values')[0].enumeration.items
                        // [{label:'Todos preços', value:''}, {label:'teste', value:'teste'}]
                    }
                />
                <LinkButton
                    text="Procurar"
                    link="#"
                    color={`bg-primary text-white`}
                    hover={`hover:bg-soft hover:text-white`}
                />
            </div>
        </div>
    )
}