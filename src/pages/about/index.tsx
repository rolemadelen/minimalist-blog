import Footer from '@/components/Footer';
import Link from 'next/link';
import IconArrowLeft from '/public/icons/icon-arrow-left.svg';
import Image from 'next/image';
import taikoGIF from '/public/images/about.gif';
import { AboutContent, AboutSubtitle, AboutTitle } from '@/components/custom-tw-components';

const About = () => {
  return (
    <div className='max-w-[36rem] m-auto text-center px-4'>
      <div className='mb-36'>
        <h1 className='text-5xl mt-36 mb-10 leading-tight'>This page is under construction</h1>
        <div>Enjoy the short clip of me playing taiko (・_・)ノ</div>
        <Image
          priority
          width={350}
          height={390}
          src={taikoGIF}
          alt='GIF is loading.'
          className={'rounded-xl mx-auto my-[1.5rem]'}
        />
      </div>
      <Footer pageFrom='about' />
    </div>
  )
}

export default About;
