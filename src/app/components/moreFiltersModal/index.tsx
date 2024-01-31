'use client';

import './styles.css'
import { NumberToogleInput } from '../numberToogleInput';
import { IoCloseOutline } from 'react-icons/io5';
import { CheckBoxInput } from '../checkBoxInput';
import useScreenSize from '@/app/hooks/useScreenSize';
import { SelectInput } from '../selectInput';

interface FullFiltersProps {
    handleFields: (input: { name: string; value: string }) => void;
    fields:any;
    setMoreFilters: React.Dispatch<React.SetStateAction<boolean>>;
    open:string;
    data:any;
  }

export default function MoreFilterModal({ data, open, handleFields, fields, setMoreFilters }: FullFiltersProps) {
    const {isLargeScreen} = useScreenSize(1024);
    return (
    <>
        <div className={`more-filter-modal ${open}`}>
            <div className="modal-header">
                <h3>Mais filtros</h3><IoCloseOutline  onClick={() => setMoreFilters(false)}/>
            </div>
            <div className="modal-body">
                {!isLargeScreen && <SelectInput
                    id={'type'}
                    sendInput={handleFields}
                    label={'Tipo de imóvel'}
                    old={fields.type}
                    defaultOption={{name_pt_br:'Todos tipos', slug:''}}
                    options={
                        data.configs.filter((configs:any) => configs.key === 'localization_type')[0]?.enumeration.items
                    }
                />}
                {!isLargeScreen && <SelectInput
                    id={'status'}
                    sendInput={handleFields}
                    label={'Status do imóvel'}
                    old={fields.status}
                    defaultOption={{name_pt_br:'Todos status', slug:''}}
                    options={
                        data.configs.filter((configs:any) => configs.key === 'property_status')[0]?.enumeration.items
                    }
                />}
                {!isLargeScreen && <SelectInput
                    id={'price'}
                    sendInput={handleFields}
                    label={'Qual o preço'}
                    old={fields.price}
                    defaultOption={{name_pt_br:'Todos preços', slug:''}}
                    options={
                        data.configs.filter((configs:any) => configs.key === 'min_value')[0]?.enumeration.items
                    }
                />}
                {!isLargeScreen && <SelectInput
                    id={'order'}
                    sendInput={handleFields}
                    label={'Ordenar por'}
                    old={fields.order}
                    options={
                        [{name_pt_br:'Recente', slug:'recent'}]
                        // [{label:'Recente', value:''}, {label:'teste', value:'teste'}]
                    }
                />}
                {!isLargeScreen && <NumberToogleInput
                    id={'rooms'}
                    sendInput={handleFields}
                    label={'Quartos'}
                    old={fields.rooms}
                    options={['1', '2', '3', '4', '5', '+']}        
                />}
                <NumberToogleInput
                    id={'suites'}
                    sendInput={handleFields}
                    label={'Suítes'}
                    old={fields.suites}
                    options={['1', '2', '3', '4', '5', '+']}        
                />
                <NumberToogleInput
                    id={'garage'}
                    sendInput={handleFields}
                    label={'Vagas'}
                    old={fields.garage}
                    options={['1', '2', '3', '4', '5', '+']}        
                />
                <div className="checkbox-list">
                    <CheckBoxInput
                        id={'sala_de_estar'}
                        sendInput={handleFields}
                        label={'Sala de Estar'}
                        old={fields.sala_de_estar}
                    />
                    <CheckBoxInput
                        id={'chuveiro_a_gas'}
                        sendInput={handleFields}
                        label={'Chuveiro á gás'}
                        old={fields.chuveiro_a_gas}
                    />
                    <CheckBoxInput
                        id={'sacada'}
                        sendInput={handleFields}
                        label={'Sacada'}
                        old={fields.sacada}
                    />
                    <CheckBoxInput
                        id={'area_de_servico'}
                        sendInput={handleFields}
                        label={'Área de Serviço'}
                        old={fields.area_de_servico}
                    />
                    <CheckBoxInput
                        id={'lavabo'}
                        sendInput={handleFields}
                        label={'Lavabo'}
                        old={fields.lavabo}
                    />
                    <CheckBoxInput
                        id={'living'}
                        sendInput={handleFields}
                        label={'Living'}
                        old={fields.living}
                    />
                </div>
                <div className="modal-footer">
                    <button className="accept" onClick={() => setMoreFilters(false)}>Encontrar Imóveis</button>
                    <button className="clear" onClick={() => setMoreFilters(false)}>Limpar filtros</button>
                </div>
            </div>
        </div>
        <div className={`more-filter-modal-overlay ${open}`}  onClick={() => setMoreFilters(false)}></div>
    </>            
  )
}
