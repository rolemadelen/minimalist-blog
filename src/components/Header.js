import React from 'react';
import Link from 'next/link';
import { 
    HeaderWrapper,
    Logo
} from './custom-tw-components';

const Header = ({lang}) => {
    return (
        <HeaderWrapper>
            <Logo>rolemadelen</Logo>
            <div>
                <button className={`btn ${lang === 'en' ? 'btn-ghost' : ''}`}>
                    <Link href="/blog/ko">한</Link>
                </button>
                <button className={`btn ${lang === 'ko' ? 'btn-ghost' : ''}`}>
                    <Link href="/blog/en">A</Link>
                </button>
            </div>
        </HeaderWrapper>
    );
};

export default Header;