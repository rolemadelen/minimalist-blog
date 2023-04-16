import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
  Main, 
  MainTitle,
  MainMenu,
  MainMenuAbout,
  MainMenuBlog
} from "../components/custom-tw-components";

export default function Home() {
  const [imagePath, setImagePath] = useState('');
  const [imageWidth, setImageWidth] = useState(315);
  const [imageHeight, setImageHeight] = useState(317);

  useEffect(() => {
      function handleResize() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1920) {
          setImagePath('/images/desktop1920-1199x385.png');
          setImageWidth(1199);
          setImageHeight(385);
        } else if(screenWidth >= 1440) {
          setImagePath('/images/desktop1440-987x317.png')
          setImageWidth(987);
        } else if(screenWidth >= 768) {
          setImagePath('/images/tablet-608x317.png');
          setImageWidth(608);
        } else {
          setImagePath('/images/iphone-315x317.png')
        }
      }
      window.addEventListener('resize', handleResize);
      handleResize(); // Call the function initially
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <Main>
          <Image
          src={imagePath || '/images/iphone-315x317.png'}
          alt="Main Picture"
          width={imageWidth}
          height={imageHeight}
          className='profile-image'
        />
        <MainTitle>rolemadelen</MainTitle>
        <MainMenu>
          <MainMenuAbout>
            about
            </MainMenuAbout>
          <MainMenuBlog>
            blog
            </MainMenuBlog>
        </MainMenu>
    </Main>
  )
}
