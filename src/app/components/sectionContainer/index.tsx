import React, { ReactNode } from 'react';
import './styles.css';
import { SectionTitle } from '../sectionTitle';

interface SectionContainerProps {
    children: ReactNode;
    extraClass?: string;
    bg?:string;
    color?:string;
    hover?:string;
    border?:string;
    link?:string;
    title:{
        name_pt_br:string;
        link_label_pt_br?: string;
        link?:string;
    }
    noPad?:boolean
}

export const SectionContainer = ({ children, noPad, link, border, extraClass, title, bg, color, hover }: SectionContainerProps) => {
    const containerClasses = `content ${extraClass}`;

    return (
        <div className={`section-container ${bg}`}>
            <div className={`${containerClasses} ${noPad ? 'px-0' : 'px-4'}`}>
                <SectionTitle noPad={noPad} link={link} title={title} border={border} color={color} hover={hover}/>
            </div>
            {children}
        </div>
    );
};