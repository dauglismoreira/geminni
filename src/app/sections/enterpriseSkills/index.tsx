'use client';

import { useState } from 'react';
import './styles.css'
import { IoMdCheckmark } from "react-icons/io";

interface EnterpriseTitleProps{
    enterprise:{
        skills:string[];
        content:string;
    }
}

export default function EnterpriseSkills({enterprise}: EnterpriseTitleProps) {

    const [viewMore, setViewMore] = useState(false)

    return (
        <div className="enterprise-skills-container">
            <h3>O apartamento</h3>
            <h5>Características</h5>
            <div className="enterprise-skills">
                {enterprise.skills.map((skill, index) => (
                    <span key={index}><IoMdCheckmark />{skill}</span>
                ))}
            </div>
            <div className={`enterprise-description ${viewMore ? 'expand' : ''}`}>
                <div dangerouslySetInnerHTML={{ __html: enterprise.content }} />
            </div>
            <div
                className="view-more"
                onClick={() => setViewMore(!viewMore)}
            >Ver {!viewMore ? 'mais' : 'menos'}</div>
        </div>
    )
}
