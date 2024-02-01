'use client';

import fetchDataFilter from '@/app/helpers/fetchDataFilter';
import {useEffect, useState} from 'react';
import FullFilters from '../fullFilters';
import { PropertyCard } from '../propertyCard';
import LoadingSpinner from '../loading';

interface PropertiesFiltersProps {
    data:any;
    configs:any;
}

export default function Properties({data, configs}:PropertiesFiltersProps) {
    const [properties, setProperties] = useState<any[]>([])
    const [page, setPage] = useState(2)
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState([])
    const [finalPage, setFinalPage] = useState(false)

    useEffect(() => {
        setProperties(data.data.properties.data)
    }, [data])
 
    const fetchDataFields = (fields: any) => {    
        setLoading(true)
        setFinalPage(false)
        setFilters(fields)  
        setPage(1)  
        fetchDataFilter('property', fields, 1)
          .then((data) => {
            setProperties(data.data.properties.data);
            if(!data.data.properties.next_page_url){
                setFinalPage(true)
            }
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            let triggerPosition;
      
            if (window.innerWidth >= 768) {
              triggerPosition = docHeight - 100;
            } else {
              triggerPosition = docHeight - 800;
            }
      
            const windowBottom = windowHeight + window.pageYOffset;
    
          if (windowBottom >= triggerPosition && !finalPage && !loading) {
            setPage((prevPage) => prevPage + 1)
            setLoading(true)
            fetchDataFilter('property', filters, page)
            .then((data) => {
                setProperties((prevProperties:any) => [...prevProperties, ...data.data.properties.data]);
                if(!data.data.properties.next_page_url){
                    setFinalPage(true)
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [loading]);  

  return (
    <>
        <div className="enterprise-search-bar">
            <FullFilters
                fetchDataFields={fetchDataFields}
                data={configs.data}
            />
        </div>
        <div className="enterprise-search-list">
            {properties.map((post:any, index:number) => (
                <PropertyCard key={index} data={post}/>
            ))}
            {loading && <LoadingSpinner/>}
        </div>
    </>
  )
}