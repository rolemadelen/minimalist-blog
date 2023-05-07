import Giscus from "@giscus/react";

export default function Comments() {
    return (
        <Giscus
            repo="rolemadelen/blogv2"
            repo-id="R_kgDOJXRY1A"
            category="General"
            category-id="DIC_kwDOJXRY1M4CWLQD"
            mapping="title"
            reactions-enabled="1"
            emit-metadata="0"
            input-position="top"
            theme="light"
            lang={"en"}
            loading="lazy"
            crossorigin="anonymous"
            />
    );
};