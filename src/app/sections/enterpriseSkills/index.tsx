'use client';

import { useState } from 'react';
import './styles.css'
import { IoMdCheckmark } from "react-icons/io";

interface EnterpriseTitleProps{
    data:{
        name_pt_br:string;
    }[]
    description?:string;
}

export default function EnterpriseSkills({description, data}: EnterpriseTitleProps) {

    const [viewMore, setViewMore] = useState(false)

    return (
        <div className="enterprise-skills-container">
            <h3>O apartamento</h3>
            <h5>Características</h5>
            <div className="enterprise-skills">
                {data && data.map((skill, index) => (
                    <span key={index}><IoMdCheckmark />{skill.name_pt_br}</span>
                ))}
            </div>
            <div className={`enterprise-description ${viewMore ? 'expand' : ''}`}>
                {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
            </div>
            <div
                className="view-more"
                onClick={() => setViewMore(!viewMore)}
            >{!viewMore ? 'Continuar lendo' : 'Ver menos'}</div>
        </div>
    )
}
