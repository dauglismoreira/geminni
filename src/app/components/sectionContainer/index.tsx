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
    title:{
        name_pt_br:string;
        link_label_pt_br?: string;
        link?:string;
    }
}

export const SectionContainer = ({ children, border, extraClass, title, bg, color, hover }: SectionContainerProps) => {
    const containerClasses = `content ${extraClass}`;

    return (
        <div className={`section-container ${bg}`}>
            <div className={containerClasses}>
                <SectionTitle title={title} border={border} color={color} hover={hover}/>
            </div>
            {children}
        </div>
    );
};