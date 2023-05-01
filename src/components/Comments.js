import React from 'react';
import Giscus from "@giscus/react";

export default function Comments() {
    return (
        <Giscus
            repo="rolemadelen/blogv2"
            repoId="R_kgDOJXRY1A"
            category="General"
            categoryId="DIC_kwDOJXRY1M4CWLQD"
            mapping="title"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            llang="en"
            loading="lazy"
            crossorigin="anonymous"
        />
    );
};