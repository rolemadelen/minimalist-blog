import React from 'react';
import Link from 'next/link';
import { 
    HeaderWrapper,
    Logo
} from './custom-tw-components';

const Header = ({lang}) => {
    return (
        <HeaderWrapper>
            <Link href={"/"} className={'btn btn-ghost'}>
                <Logo>rolemadelen</Logo>
            </Link>
            <div>
                <Link className={`btn ${lang === 'en' ? 'btn-ghost' : ''}`} href="/blog/ko">한</Link>
                <Link className={`btn ${lang === 'ko' ? 'btn-ghost' : ''}`} href="/blog/en">A</Link>
            </div>
        </HeaderWrapper>
    );
};

export default Header;