import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='max-w-[36rem] m-auto text-3xl mt-36 mb-20 px-6'>
      <Link href={"/about"} >
        <div>je.</div>
      </Link>
    </div>
  );
};

export default Header;
