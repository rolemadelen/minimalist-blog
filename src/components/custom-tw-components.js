import tw from 'tailwind-styled-components';

export const Main = tw.div`
    main

    h-screen

    flex
    flex-col
    flex-wrap
    justify-center
    content-center

    ml-[1.875rem]
    mr-[1.875rem]
`;

export const MainTitle = tw.h1`
    main-title
    z-10
    font-['AmazonEmberDisplayMedium']
    text-[2.375rem]
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

export const HeaderWrapper = tw.div`
    header-wrapper
    flex
    justify-between
    content-center
    m-[1.875rem]
`

export const Logo = tw.button`
    logo 
    font-['AmazonEmberDisplayMedium']
    font-medium	
    text-[1.25rem]
`

export const SNS = tw.div`
    sns
    flex
    justify-evenly
    content-center
    w-[10rem]
    mx-auto
    mt-[2.1875rem]
    mb-[1.125rem]
`

export const PostsWrapper = tw.div`
    posts-wrapper
    ml-[1.875rem]
    mr-[1.875rem]
`

export const PostList = tw.span`
    post-list
    block
    mx-auto
`

export const PostUID = tw.span`
    post-uid
    block
    text-[#ccc]
    text-[0.8125rem]
    h-[13px]
    mb-[1px]
`
export const PostTitle = tw.p`
    post-title
    mb-[1.75rem]
`