import { useEffect, useRef } from 'react';

export default function Giscus() {
    const ref = useRef(null);
    
    useEffect(() => {
        if (!ref.current || ref.current.hasChildNodes()) return;
        
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://giscus.app/client.js';
        scriptElem.async = true;
        scriptElem.crossOrigin = 'anonymous';
        
        scriptElem.setAttribute('data-repo', 'rolemadelen/blogv2');
        scriptElem.setAttribute('data-repo-id', 'R_kgDOJXRY1A');
        scriptElem.setAttribute('data-category', 'General');
        scriptElem.setAttribute('data-category-id', 'DIC_kwDOJXRY1M4CWLQD');
        scriptElem.setAttribute('data-mapping', 'title');
        scriptElem.setAttribute('data-strict', '0');
        scriptElem.setAttribute('data-reactions-enabled', '1');
        scriptElem.setAttribute('data-emit-metadata', '0');
        scriptElem.setAttribute('data-input-position', 'top');
        scriptElem.setAttribute('data-theme', 'preferred_color_scheme');
        scriptElem.setAttribute('data-lang', 'en');
        scriptElem.setAttribute('data-loading', 'lazy');
        
        ref.current.appendChild(scriptElem);
    }, [ref]);

    return <section ref={ref} />;
}