'use client'

import {useEffect} from 'react';

const ScriptInjector = ({ scriptContent }:any) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = scriptContent.replace(/<\/?script>/g, '');
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [scriptContent]);

  return null;
};

export default ScriptInjector;