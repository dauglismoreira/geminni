import React, { ReactNode } from 'react';
import './styles.css';
import { SectionTitle } from '../sectionTitle';

interface SectionContainerProps {
    children: ReactNode;
    extraClass?: string;
    bg?:string;
    color?:string;
    hover?:string;
    title:{
        title:string;
        link?:string;
        linkText?:string;
    }
}

export const SectionContainer = ({ children, extraClass, title, bg, color, hover }: SectionContainerProps) => {
    const containerClasses = `content ${extraClass}`;

    return (
        <div className={`section-container ${bg}`}>
            <div className={containerClasses}>
                <SectionTitle title={title} color={color} hover={hover}/>
            </div>
            {children}
        </div>
    );
};