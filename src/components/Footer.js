import Link from 'next/link';
import React from 'react';

const Footer = ({ pageFrom }) => {
  return (
    <>
      <div className='max-w-[18rem] m-auto flex flex-col items-center'>
        <div className='footer max-w-[18rem] mb-5 m-auto flex justify-center item-center'>
          {pageFrom !== 'blog' && (
            <Link href='/'>blog</Link>
          )}
          {pageFrom !== 'about' && (
            <Link href='/about'>about</Link>
          )}
        </div >
        <span className='mb-16'>૮₍ • ᴥ • ₎ა</span>
      </div>
    </>
  );
};

export default Footer;
