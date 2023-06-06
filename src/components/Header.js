import React from 'react';
import Link from 'next/link';
import { 
    HeaderWrapper,
    Logo
} from './custom-tw-components';

const Header = ({type}) => {
    return (
        <HeaderWrapper>
            <Link href={"/"} >
            <Logo>rolemadelen</Logo>
            </Link>
            <div>
                <Link className={`btn ${type === 'zettel' ? 'btn-ghost' : ''}`} href="/blog/">Blog</Link>
                <Link className={`btn ${type === 'blog' ? 'btn-ghost' : ''}`} href="/zettel/">Zettel</Link>
            </div>
        </HeaderWrapper>
    );
};

export default Header;