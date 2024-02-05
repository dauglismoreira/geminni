'use client'

import { useEffect } from 'react';

const ScriptInjector = ({ scriptContent }:any) => {
  useEffect(() => {
    const script = document.createElement('script');
    const sanitizedContent = scriptContent.replace(/<\/?script>/g, '');
    script.innerHTML = sanitizedContent;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [scriptContent]);

  return null;
};

export default ScriptInjector;