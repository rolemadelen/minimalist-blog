import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import { useState } from 'react'

type Metadata = {
  owner: {
    [index: string]: any
  }
  work_exp: {
    [index: string]: any
  }
  work: {
    [index: string]: any
  }
  education: {
    [index: string]: any
  }
  contacts: {
    [index: string]: any
  }
}

const metadata: Metadata = {
  owner: {
    name: 'Jii Eu',
    role: 'Web Developer (Front-End)',
    email: 'hello@jiieu.com',
  },
  work_exp: {
    0: {
      year: '2023~',
      icon: '🧑🏻‍💻🇺🇸',
      company: 'Freelance Web Developer',
    },
    1: {
      year: '2021-2023',
      icon: '🧑🏻‍💻🇯🇵',
      company: 'Aikomi Inc.',
      link: 'https://aikomi.co.jp/',
    },
    2: {
      year: '2020-2021',
      icon: '🧑🏻‍🏫🇯🇵',
      company: 'BorderLink Inc.',
      link: 'https://www.borderlink.co.jp/alt/',
    },
    3: {
      year: 'Winter 2017',
      icon: '🧑🏻‍💻🇺🇸',
      company: 'FASTech LLC.',
    },
    4: {
      year: '2014-2016',
      icon: '🧑🏻‍💻🇺🇸',
      company: 'Riverside City College',
      link: 'https://www.rcc.edu/student-support/ccc-lab.html',
    },
  },
  work: {
    0: {
      year: '2023',
      project: 'Asayake Taiko Website Renewal',
      link: 'https://github.com/rolemadelen/asayake',
    },
    1: {
      year: '2023',
      project: 'Things I Want',
      link: 'https://github.com/rolemadelen/things-i-want',
    },
    2: {
      year: '2023',
      project: 'Artlog',
      link: 'https://github.com/rolemadelen/artlog',
    },
    3: {
      year: '2022',
      project: 'ghostvatar',
      link: 'https://github.com/rolemadelen/ghost-vatar',
    },
    4: {
      year: '2020',
      project: 'Baekjoon Online Judge CLI',
      link: 'https://github.com/euisblue/euisblue.github.io',
    },
    5: {
      year: '2016',
      project: 'TUI Chess',
      link: 'https://github.com/rolemadelen/chess',
    },
  },
  education: {
    0: {
      year: '2019',
      school: 'UC San Diego - B.S. Human-Computer Interaction',
    },
    1: {
      year: '2016',
      school: 'Riverside City College - A.S. Computer Science',
    },
  },
  contacts: {
    youtube: {
      name: 'YouTube',
      handle: 'rolemadelen',
      link: 'https://youtube.com/@rolemadelen',
    },
    github: {
      name: 'GitHub',
      handle: 'rolemadelen',
      link: 'https://github.com/rolemadelen',
    },
    twitter: {
      name: 'Twitter',
      handle: 'rolemadelen',
      link: 'https://twitter.com/rolemadelen',
    },
    linkedin: {
      name: 'LinkedIn',
      handle: 'jiieu',
      link: 'https://www.linkedin.com/in/jiieu/',
    },
    instagram: {
      name: 'Instagram',
      handle: 'jiidraws',
      link: 'https://www.instagram.com/jiidraws',
    },
  },
}

const About = () => {
  const [expand, setExpand] = useState(false)
  const { owner, work_exp, work, education, contacts } = metadata

  const handleReadMore = () => {
    setExpand((prev) => !prev)
  }
  return (
    <>
      <ProgressBar />
      <div className="about max-w-[36rem] m-auto px-4">
        <div className="header mb-16">
          <div className="border-b mb-8">
            <h1 className="text-5xl mt-36 leading-tight font-semibold">
              {owner.name}
            </h1>
            <h3 className="text-md mb-2">{owner.role}</h3>
            <h4 className="text-sm mb-8 text-gray-500">
              📮 <a href={`mailto:${owner.email}`}>{owner.email}</a>
            </h4>
          </div>

          <div className="content mb-10 text-left border-b pb-16">
            <div className="mb-8">
              <h2 className="text-xl mb-4 font-semibold">About</h2>
              <div
                className={`${
                  expand ? 'max-h-[1000px]' : 'max-h-[150px]'
                } transition-all duration-500 overflow-hidden`}
              >
                <p>
                  I was born in{' '}
                  <a href="https://www.google.com/search?q=andong+south+korea&oq=Andong+south+korea&sourceid=chrome&ie=UTF-8">
                    Andong
                  </a>
                  , South Korea in the mid-1990s. Although I don&apos;t recall
                  the exact year, I believe I was around 9 years old when our
                  family relocated to Southern California. At that time, my
                  knowledge of English was limited to just one word:{' '}
                  <i>hello</i>. So, I spent the majority of my time with my only
                  friend, Diablo II. I think it&apos;s fair to say that I was a
                  game addict.
                </p>
                <p>
                  One day, my sister called me over and showed me a program she
                  had made in C. It displayed a prompt, <i>Enter your name</i>.
                  I typed in my name, and it responded with,{' '}
                  <i>Jii is an idiot</i>. This unexpected encounter served as my
                  first exposure to programming. I found programming incredibly
                  intriguing, far more captivating than any games I had played
                  before. I self taught programming and as I spent more time
                  with it, I gradually lost interest in playing games.
                </p>
                <p>
                  After high school, I enrolled in a community college to study
                  Computer Science. Then I transferred to UCSD pursuing Math-CS.
                  However, my passion for understanding user experiences and
                  interfaces led me to switch my major to
                  Human-Computer-Interaction. As my fascination with web
                  development grew, I began creating personal blogs as a way to
                  practice and refine my skills. Following my graduation from
                  UCSD, I moved to Japan and got my first professional work
                  experience as a front-end developer at a healthcare startup.
                </p>
                <p>
                  After spending three years abroad, I returned to the States.
                  Currently, I reside in Kentucky with my partner and our
                  beloved German Shepherd puppy.
                </p>
                <p>
                  That&apos;s about who I am. If there&apos;s something you want
                  to know more about me or are interested in discussing
                  potential remote opportunities, please don&apos;t hesitate to
                  reach out to me via email at{' '}
                  <a href="mailto:hello@jiieu.com">hello@jiieu.com</a>.
                </p>
              </div>
              <div
                role="button"
                className="mt-4 text-right hover:cursor-pointer hover:line-through decoration-2 decoration-[rgb(2,132,199)]"
                onClick={handleReadMore}
              >
                <span className="text-sky-600">
                  {expand ? 'read less ↑' : 'read more ↓'}
                </span>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl mb-4 font-semibold">Work Experience</h2>
              <div>
                <ul role="list">
                  {Object.keys(work_exp).map((key) => (
                    <li key={key} className="mb-2">
                      <span className="w-28 inline-block">
                        {work_exp[key].year}
                      </span>{' '}
                      <span className="inline-block">
                        {work_exp[key].icon}{' '}
                        {work_exp[key].link ? (
                          <a
                            href={work_exp[key].link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {work_exp[key].company}
                          </a>
                        ) : (
                          work_exp[key].company
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl mb-4 font-semibold">Education</h2>
              <div>
                <ul role="list">
                  {Object.keys(education).map((key) => (
                    <li key={key} className="mb-2">
                      <span className="w-16 inline-block">
                        {education[key].year}
                      </span>{' '}
                      <span className="inline-block">
                        {education[key].school}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl mb-4 font-semibold">Creative Works</h2>
              <div>
                <ul role="list">
                  {Object.keys(work).map((key) => (
                    <li key={key} className="mb-2">
                      <span className="w-16 inline-block">
                        {work[key].year}
                      </span>{' '}
                      <span className="inline-block">
                        <a
                          href={work[key].link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {work[key].project}
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl mb-4 font-semibold">Get in Touch</h2>
              <ul role="list" className="text-md">
                {Object.keys(contacts).map((key) => (
                  <li key={key} className="mb-2">
                    <a
                      href={contacts[key].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contacts[key].name} / @{contacts[key].handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Footer pageFrom="about" />
      </div>
    </>
  )
}

export default About
