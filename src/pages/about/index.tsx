import Footer from '@/components/Footer';
import Link from 'next/link';
import IconArrowLeft from '/public/icons/icon-arrow-left.svg';
import Image from 'next/image';
import taikoGIF from '/public/images/about.gif';
import { AboutContent, AboutSubtitle, AboutTitle } from '@/components/custom-tw-components';

const About = () => {
    return (
        <div className={'wrapper'}>
            <div className={'text-center'}>
                <AboutTitle>Jii Eu</AboutTitle>
                <AboutSubtitle>태고하는 프론트엔드 개발자</AboutSubtitle>
                <Image
                    priority
                    width={350}
                    height={390}
                    src={taikoGIF}
                    alt='GIF is loading.'
                    className={'rounded-xl mx-auto my-[1.5rem]'}
                />
            </div>
            <AboutContent>
                <p>
                안녕하세요. Jii Eu(지이) 입니다. 태고(太鼓)치는 취미를 가지고 있지만 <a href='https://taiko-ch.net/index.php'>태고의 달인</a>은 잘 못합니다. 켄터키주 조용한 곳에 파트너와 강아지 한 마리와 함께 살고 있습니다 👸🏻🐶
                </p>
                <p>
                2020년에 일본으로 넘어가 1년간 초등학교에서 외국어 교사 (FLT; Foreign Language Teacher)로 일을 했습니다.
                그 후 의료 분야 일본 스타트업에 입사해, 약 2년 동안 프론트엔드 개발자로 일을 했습니다. 
                </p> 
                <p>사내 애플리케이션의 UI 수정 및 유지보수, 그리고 버그를 고치는 작업을 주로 했고, 회사 서비스 소개 및 문의 페이지를 담당하여 만들기도 했습니다. 외국어 능력을 살려 개발자들 사이의 영어-일본어 통역을 한 경험도 있습니다.
                </p>
                <hr />
                <p>
                Greetings, my name is Jii Eu and I have a hobby of playing Taiko drums (the actual taiko not the <a href='https://www.nintendo.com/store/products/taiko-no-tatsujin-drum-n-fun-switch/'>game</a>). Currently, I reside in a peaceful area of Kentucky with my partner and one furry companion 👸🏻🐶
                </p>
                <p>
                In 2020, I worked as a Foreign Language Teacher (FLT) for one year at an elementary school in Japan. After that, I worked as a frontend developer for a healthcare startup in Japan for two years. My primary responsibilities included modifying and maintaining the company&apos;s internal application UI, debugging, and creating service introduction and inquiry pages from scratch. Additionally, I utilized my language skills to work as an English-Japanese interpreter among developers.
                </p>
                <Link href='/' className={'back-button w-[2rem] h-[1.5625rem] flex justify-center items-center rounded mb-[1.25rem] border-[1px] border-solid border-[#ccc] hover:bg-[#e7e7e7] duration-75'}>
                    <Image src={IconArrowLeft} alt="←" />
                </Link>
            </AboutContent>
            <Footer/>
        </div>
        )
    }
    
    export default About;