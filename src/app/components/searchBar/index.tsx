'use client';

import useFields from '@/app/hooks/useFields';
import { LinkButton } from '../linkButton';
import { SelectInput } from '../selectInput';
import './styles.css';

interface selectProps {
    name?:string;
    options:{
        label:string;
        value:string;
    }[];
}

interface SearchBarProps {
    data?:selectProps[];
}

export const SearchBar = ({data}: SearchBarProps) => {

    const {fields, handleFields} = useFields({
        region: '',
        type: '',
        status: '',
        price:'',
    })

    return(
        <div className="search-bar-container">
            <div className="search-bar-title">
                <h4>Procure por nossos imóveis selecionados</h4>
            </div>
            <div className="search-bar-inputs">
                <SelectInput
                    id={'region'}
                    sendInput={handleFields}
                    label={'Região'}
                    old={fields.region}
                    options={[{label:'Todas regiões', value:''}, {label:'teste', value:'teste'}]}
                />
                <SelectInput
                    id={'type'}
                    sendInput={handleFields}
                    label={'Tipo de imóvel'}
                    old={fields.type}
                    options={[{label:'Todos tipos', value:''}, {label:'teste', value:'teste'}]}
                />
                <SelectInput
                    id={'status'}
                    sendInput={handleFields}
                    label={'Status do imóvel'}
                    old={fields.status}
                    options={[{label:'Todos status', value:''}, {label:'teste', value:'teste'}]}
                />
                <SelectInput
                    id={'price'}
                    sendInput={handleFields}
                    label={'Qual o preço'}
                    old={fields.price}
                    options={[{label:'Todos preços', value:''}, {label:'teste', value:'teste'}]}
                />
                <LinkButton
                    text="Procurar"
                    link="#"
                    color={`bg-primary text-white`}
                    hover={`hover:bg-light hover:text-white`}
                />
            </div>
        </div>
    )
}