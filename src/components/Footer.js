import React from 'react';
import Image from 'next/image';
import { SNS } from '@/components/custom-tw-components';
import IconGithub from '/public/icons/icon-github.svg';
import IconTwitter from '/public/icons/icon-twitter.svg';
import IconLinkedIn from '/public/icons/icon-linkedin.svg';
import IconEmail from '/public/icons/icon-email.svg';
import Link from 'next/link';

const Footer = ({lang}) => {    
    return (
        <>
            <SNS>
                <button type='button'>
                    <Link href="https://twitter.com/rolemadelen" target="_blank" rel="noopener noreferrer">
                        <Image src={IconTwitter} alt="Twitter" />
                    </Link>
                </button>
                <button type='button'>
                    <Link href='https://github.com/rolemadelen' target="_blank" rel="noopener noreferrer">
                        <Image src={IconGithub} alt="Github" />
                    </Link>
                </button>
                <button type='button'>
                    <Link href='https://www.linkedin.com/in/jiieu/' target="_blank" rel="noopener noreferrer">
                        <Image src={IconLinkedIn} alt="LinkedIn" />
                    </Link>
                </button>
                <button type='button'>
                    <Link href='mailto:rolemadelen@pm.me'>
                        <Image src={IconEmail} alt="email" />
                    </Link>
                </button>
            </SNS>
            <p className='text-center text-xs mb-[1.875rem]'>Copyright © 2023 Jii Eu | rolemadelen</p>
        </>
    );
};

export default Footer;