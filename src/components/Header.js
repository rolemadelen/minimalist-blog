import React from 'react';
import Link from 'next/link';
import { 
    HeaderWrapper,
    Logo
} from '../components/custom-tw-components';

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>rolemadelen</Logo>
            <div>
                <button className='btn'>한</button>
                <button className='btn btn-ghost'>
                    <Link href={'/blog-en'}>A</Link>
                </button>
            </div>
        </HeaderWrapper>
    );
};

export default Header;