import { useEffect, useState } from 'react';

const Giscus = (params) => {
    const { url, repo, repoId, category, categoryId, lang, theme, mapping, crossorigin, loading, inputPosition, ref} = params;

    const [status, setStatus] = useState(url ? 'loading' : 'idle');

    // run the useEffect when the url of the script changes
    useEffect(() => {
        if (!url) {
            setStatus('idle');
            return;
        }

        let script = document.createElement('script');
        script.src = url;
        script.setAttribute('data-repo', repo);
        script.setAttribute('data-repo-id', repoId);
        script.setAttribute('data-category', category);
        script.setAttribute('data-category-id', categoryId);
        script.setAttribute('data-mapping', mapping);
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', inputPosition);
        script.setAttribute('data-theme', theme);
        script.setAttribute('data-lang', lang);
        script.setAttribute('data-loading', loading);
        script.setAttribute('crossorigin', crossorigin);

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

    }, [category, categoryId, crossorigin, inputPosition, lang, loading, mapping, ref, repo, repoId, theme, url]);
    return status;
};

export default Giscus;
