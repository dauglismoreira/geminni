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
                    defaultOption={{name_pt_br:'Todas regiões', slug:''}}
                    options={
                        data.configs.filter((configs:any) => configs.key === 'region')[0]?.enumeration.items
                    }
                />
                <SelectInput
                    id={'type'}
                    sendInput={handleFields}
                    label={'Tipo de imóvel'}
                    old={fields.type}
                    defaultOption={{name_pt_br:'Todos tipos', slug:''}}
                    options={
                        data.configs.filter((configs:any) => configs.key === 'localization-type')[0]?.enumeration.items
                    }
                />
                <SelectInput
                    id={'status'}
                    sendInput={handleFields}
                    label={'Status do imóvel'}
                    old={fields.status}
                    defaultOption={{name_pt_br:'Todos status', slug:''}}
                    options={
                        data.configs.filter((configs:any) => configs.key === 'state-property')[0]?.enumeration.items
                    }
                />
                <SelectInput
                    id={'price'}
                    sendInput={handleFields}
                    label={'Qual o preço'}
                    old={fields.price}
                    defaultOption={{name_pt_br:'Todos preços', slug:''}}
                    options={
                        data.configs.filter((configs:any) => configs.key === 'range-values')[0]?.enumeration.items
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