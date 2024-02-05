'use client';

import { useState } from 'react';
import { MdOutlineContentCopy, MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md'

export const ShareIcons = () => {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        const url = window.location.href;
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
      };
    
      const sendByEmail = () => {
        const url = window.location.href;
        const subject = encodeURIComponent('Confira este imóvel');
        const body = encodeURIComponent(`Veja este incrível imóvel: ${url}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
      };
    
      const shareToWhatsApp = () => {
        window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(window.location.href), '_blank')
      };

    return(
        <>
        <div className="share-container">
            <p>Compartilhamento</p>
            <MdOutlineContentCopy onClick={copyToClipboard}/>
            <MdOutlineEmail onClick={sendByEmail}/>
            <MdOutlineWhatsapp onClick={shareToWhatsApp}/>
        </div>
        {copied ? <p>Copiado para área de transferência</p> : <></>}
        </>
    )
}