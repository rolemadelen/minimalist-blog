import React, { useRef } from 'react';
import giscus from '../lib/giscus';

const Comments = () => {
    const comment = useRef(null);

    giscus({
        url: 'https://giscus.app/client.js',
        repo: 'rolemadelen/blogv2',
        repoId: 'R_kgDOJXRY1A',
        category: 'General',
        categoryId: 'DIC_kwDOJXRY1M4CWLQD',
        lang: 'en',
        theme: 'preferred_color_scheme',
        mapping: 'title',
        crossorigin: 'anonymous',
        loading: 'lazy',
        inputPosition: 'top',
        ref: comment,
    });

    return (
        <div className="w-full mt-[5em]">
            <div ref={comment}></div>
        </div>
    );
};

export default Comments;