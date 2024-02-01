'use client';

import './styles.css'
import { NumberToogleInput } from '../numberToogleInput';
import { IoCloseOutline } from 'react-icons/io5';
import { CheckBoxInput } from '../checkBoxInput';
import useScreenSize from '@/app/hooks/useScreenSize';
import { SelectInput } from '../selectInput';
import {orderOptions} from '@/app/imoveis/mock';
import { SelectOrderInput } from '../selectOrderInput';
import { SelectValueInput } from '../selectValueInput';

interface FullFiltersProps {
    handleFields: (input: { name: string; value: string }) => void;
    fields:any;
    setMoreFilters: React.Dispatch<React.SetStateAction<boolean>>;
    open:string;
    advanced:any;
    fast:any;
    handleCheckPropFields: (input: { name: string; value: string }) => void;
    handleCheckEntFields: (input: { name: string; value: string }) => void;
  }

export default function MoreFilterModal({ handleCheckEntFields, handleCheckPropFields, advanced, fast, open, handleFields, fields, setMoreFilters }: FullFiltersProps) {
    const {isLargeScreen} = useScreenSize(1024)

    const handleClearFilters = () => {
        const newUrl = `${window.location.pathname}`;
        window.history.replaceState({}, '', newUrl);
    
        window.location.reload();
    }

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
                    label={advanced.configs.filter((configs:any) => configs.key === 'property_type')[0].value}
                    old={fields.type}
                    defaultOption={{name_pt_br:'Todos tipos', slug:''}}
                    options={
                        advanced.configs.filter((configs:any) => configs.key === 'property_type')[0]?.enumeration.items
                    }
                />}
                {!isLargeScreen && <SelectInput
                    id={'property_status'}
                    sendInput={handleFields}
                    label={fast.configs.filter((configs:any) => configs.key === 'property_status')[0].value}
                    old={fields.status}
                    defaultOption={{name_pt_br:'Todos status', slug:''}}
                    options={
                        fast.configs.filter((configs:any) => configs.key === 'property_status')[0]?.enumeration.items
                    }
                />}
                {!isLargeScreen && <SelectValueInput
                    id={'property_type'}
                    sendInput={handleFields}
                    label={fast.configs.filter((configs:any) => configs.key === 'min_value')[0].value}
                    old={fields.min_value}
                    numberValue={true}
                    defaultOption={{name_pt_br:'Todos preços', slug:''}}
                    options={
                        fast.configs.filter((configs:any) => configs.key === 'min_value')[0]?.enumeration.items
                    }
                />}
                {!isLargeScreen && <SelectOrderInput
                    id={'order'}
                    sendInput={handleFields}
                    label={'Ordenar por'}
                    param='slug'
                    old={fields.order}
                    options={orderOptions}
                />}
                {!isLargeScreen && <NumberToogleInput
                    id={'rooms'}
                    sendInput={handleFields}
                    label={advanced.configs.filter((configs:any) => configs.key === 'rooms')[0].value}
                    old={fields.rooms}
                    options={
                        advanced.configs.filter((configs:any) => configs.key === 'rooms')[0]?.enumeration.items
                    }         
                />}
                <NumberToogleInput
                    id={'suites'}
                    sendInput={handleFields}
                    label={advanced.configs.filter((configs:any) => configs.key === 'suites')[0].value}
                    old={fields.suites}
                    options={
                        advanced.configs.filter((configs:any) => configs.key === 'suites')[0]?.enumeration.items
                    }         
                />
                <NumberToogleInput
                    id={'parking_spaces'}
                    sendInput={handleFields}
                    label={advanced.configs.filter((configs:any) => configs.key === 'parking_spaces')[0].value}
                    old={fields.parking_spaces}
                    options={
                        advanced.configs.filter((configs:any) => configs.key === 'parking_spaces')[0]?.enumeration.items
                    }         
                />
                <div className="checkboxfilters">
                    <h5>{advanced.configs.filter((configs:any) => configs.key === 'property_characteristics')[0].value}</h5>
                    <div className="checkbox-list">
                    {advanced.configs
                    .filter((configs:any) => configs.key === 'property_characteristics')[0]?.enumeration.items
                    .sort((a: any, b: any) => a.name_pt_br.localeCompare(b.name_pt_br))
                    .map((item:any, index:number) => (
                        <CheckBoxInput
                            key={index}
                            id={item.name_pt_br}
                            sendInput={handleCheckPropFields}
                            label={item.name_pt_br}
                            old={decodeURIComponent(fields.property_characteristics).split(',').includes(item.name_pt_br) ? '1' : '0'}
                        />
                    ))}
                    </div>
                    <h5>{advanced.configs.filter((configs:any) => configs.key === 'enterprise_characteristics')[0].value}</h5>
                    <div className="checkbox-list">
                    {advanced.configs
                    .filter((configs:any) => configs.key === 'enterprise_characteristics')[0]?.enumeration.items
                    .sort((a: any, b: any) => a.name_pt_br.localeCompare(b.name_pt_br))
                    .map((item:any, index:number) => (
                        <CheckBoxInput
                            key={index}
                            id={item.name_pt_br}
                            sendInput={handleCheckEntFields}
                            label={item.name_pt_br}
                            old={decodeURIComponent(fields.enterprise_characteristics).split(',').includes(item.name_pt_br) ? '1' : '0'}
                        />
                    ))}
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="accept" onClick={() => setMoreFilters(false)}>Encontrar Imóveis</button>
                    <button className="clear" onClick={handleClearFilters}>Limpar filtros</button>
                </div>
            </div>
        </div>
        <div className={`more-filter-modal-overlay ${open}`}  onClick={() => setMoreFilters(false)}></div>
    </>            
  )
}
