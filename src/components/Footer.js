import Link from 'next/link';
import React from 'react';

const Footer = ({ pageFrom }) => {
  return (
    <>
      <div className='footer max-w-[18rem] mb-16 m-auto flex justify-center item-center'>
        {pageFrom !== 'blog' && (
          <Link href='/'>blog</Link>
        )}
        {pageFrom !== 'about' && (
          <Link href='/about'>about</Link>
        )}
        <span>(o´▽`o)ﾉ</span>
      </div >
    </>
  );
};

export default Footer;
