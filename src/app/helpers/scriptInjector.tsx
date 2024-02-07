'use client'

import { useEffect } from 'react';

const ScriptInjector = ({ scriptContent }: any) => {
    useEffect(() => {
      const scriptContentWithoutTags = scriptContent.replace(/<\/?[^>]+(>|$)/g, '');
  
      const script = document.createElement('script');
  
      script.type = 'text/javascript';
  
      script.appendChild(document.createTextNode(scriptContentWithoutTags));
  
      document.head.appendChild(script);
  
      return () => {
        document.head.removeChild(script);
      };
    }, [scriptContent]);
  
    return null;
  };
  
  export default ScriptInjector;