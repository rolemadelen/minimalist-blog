import tw from 'tailwind-styled-components';

export const Main = tw.div`
    main

    h-screen

    flex
    flex-col
    flex-wrap
    justify-center
    content-center

    mx-[1.875rem]
`;

export const MainTitle = tw.h1`
    main-title
    z-10
    text-5xl
    font-black
`;

export const MainMenu = tw.div`
    main-menu
    z-10
    flex
    justify-between
`

export const MainMenuAbout = tw.button`
    btn-about
    text-[1.125rem]
`

export const MainMenuBlog = tw.button`
    btn-blog
    text-[1.125rem]
`

export const SNS = tw.div`
    sns
    flex
    justify-evenly
    content-center
    w-[10rem]
    mx-auto
    mt-[5rem]
    mb-[1.125rem]
`

export const PostList = tw.span`
    post-list
    block
    mx-auto
`

export const PostUID = tw.span`
    post-uid
    block
    text-[#bbb]
    text-[0.8125rem]
    h-[13px]
    mb-[1px]
`
export const PostDate = tw.span`
    post-date
    block
    text-[#bbb]
    text-[0.8125rem]
    h-[13px]
    mb-[1px]
`
export const Article = tw.div`
    article
    mx-[1.875rem]
    break-all
`

export const AboutTitle = tw.h1`
    about-title
    z-10
    text-[3rem]
    font-black
    m-0
    mt-[2rem]
`;

export const AboutSubtitle = tw.p`
    about-subtitle
    z-10
    text-[1rem]
    text-[#757575]
`;

export const AboutContent = tw.div`
    about-content
    m-[2rem]
`
