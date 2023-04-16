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
    bg-white
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