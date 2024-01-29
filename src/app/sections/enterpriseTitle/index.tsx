import './styles.css'

interface EnterpriseTitleProps{
    data:{
        name_pt_br:string;
        util_area:number;
        rooms:number;
        suites:number;
        parking_spaces:number;
        floor:number;
        bathrooms:number;
        address:{
            city:{
                name:string;
            }
        },
        residential_property_type:{
            name_pt_br:string;
        },
        residential_property_status:{
            name_pt_br:string;
        }
    };
}

export default function EnterpriseTitle({data}: EnterpriseTitleProps) {  

  return (
    <div className="enterprise-title-container">
        <h1>{data?.name_pt_br}</h1>
        <h3 className="enterprise-high">
            {data?.address.city ? <span>{data.address.city.name}</span> : <></>}
            {data?.residential_property_type?.name_pt_br ? <><span>·</span><span>{data.residential_property_type?.name_pt_br}</span></> : <></>}
            {data?.residential_property_status?.name_pt_br ? <><span>·</span><span className="high">{data.residential_property_status?.name_pt_br}</span></> : <></>}
        </h3>
        <div className="enterprise-details">
            {data?.util_area ? <span>{data.util_area} m²</span> : <></>}
            {data?.rooms ? <span>{data.rooms} dormitórios</span> : <></>}
            {data?.suites ? <span>{data.suites} suíte</span> : <></>}
            {data?.parking_spaces ? <span>{data.parking_spaces} vagas</span> : <></>}
            {data?.floor ? <span>{data.floor}º andar</span> : <></>}
            {data?.bathrooms ? <span>{data.bathrooms} banheiros</span> : <></>}
        </div>
    </div>
  )
}
