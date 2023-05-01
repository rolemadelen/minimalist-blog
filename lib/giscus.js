import { useEffect, useState } from 'react';

const Giscus = (params) => {
    const { url, theme, mapping, repo, repoId, category, categoryId, lang, loading, ref } = params;

    const [status, setStatus] = useState(url ? 'loading' : 'idle');

    // run the useEffect when the url of the script changes
    useEffect(() => {
        if (!url) {
            setStatus('idle');
            return;
        }

        let script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.reactionsEnabled = true;
        script.emitMetadata = false;
        script.lang = 'en';
        script.setAttribute('data-theme', theme);
        script.setAttribute('data-mapping', mapping);
        script.setAttribute('data-repo', repo);
        script.setAttribute('data-repo-id', repoId);
        script.setAttribute('data-category', category);
        script.setAttribute('data-category-id', categoryId);
        script.setAttribute('data-loading', loading);
        script.setAttribute('data-lang', lang);

        // Add script to document body
        ref.current.appendChild(script);

        // store status of the script
        const setAttributeStatus = (event) => setStatus(event.type === 'load' ? 'ready' : 'error');

        script.addEventListener('load', setAttributeStatus);
        script.addEventListener('error', setAttributeStatus);

        return () => {
            if (script) {
                script.removeEventListener('load', setAttributeStatus);
                script.removeEventListener('error', setAttributeStatus);
            }
        };

    }, [url]);
    return status;
};

export default Giscus;
