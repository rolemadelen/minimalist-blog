import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import { metadata } from '@/lib/metadata'
import Image from 'next/image'
import { useState } from 'react'

const About = () => {
  const [expand, setExpand] = useState(false)
  const { owner, work_exp, work, blog, education, contacts } = metadata

  const handleReadMore = () => {
    setExpand((prev) => !prev)
  }
  return (
    <>
      <ProgressBar />
      <div className="about max-w-[36rem] m-auto px-4">
        <div className="header">
          <div className="border-b mt-4 mb-8 py-8 flex items-center">
            <Image
              className="rounded-lg mr-4"
              src="/profile.webp"
              width={120}
              height={120}
              alt="profile"
            />
            <div>
              <h1 className="text-5xl leading-tight font-semibold">
                {owner.name}
              </h1>
              <h3 className="text-md mb-4">{owner.role}</h3>
              <h4 className="text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <a
                    href="https://twitter.com/rolemadelen"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={'/x-logo.png'}
                      width={15}
                      height={15}
                      alt="twitter"
                    />
                  </a>
                  <a
                    href="https://github.com/rolemadelen"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={'/gh-logo.png'}
                      width={20}
                      height={20}
                      alt="github"
                    />
                  </a>

                  <a href={`mailto:${owner.email}`}>{owner.email}</a>
                </div>
              </h4>
            </div>
          </div>
          <div className="content mb-10 text-left border-b pb-16">
            <h2 className="text-xl mb-4 font-semibold">About</h2>
            <div className="mb-8">
              <div
                className={`${
                  expand ? 'max-h-[1000px]' : 'max-h-[150px] bottom-gradient'
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
                  <a href="mailto:rolemadelen@pm.me">rolemadelen@pm.me</a>.
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
                      <span className="w-28 inline-block text-sm">
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
                      <span className="w-16 inline-block text-sm">
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
              <h2 className="text-xl mb-2 font-semibold">Creative Works</h2>
              <div>
                <div className="my-4 text-sm">Side Projects</div>
                <ul role="list">
                  {Object.keys(work).map((key) => (
                    <li key={key} className="mb-2">
                      <span className="w-16 text-sm inline-block">
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
                <div className="my-4 text-sm">
                  Blog Design and Implementation
                </div>
                <ul role="list">
                  {Object.keys(blog).map((key) => (
                    <li key={key} className="mb-2">
                      <span className="w-16 text-sm inline-block">
                        {blog[key].year}
                      </span>{' '}
                      <span className="inline-block">
                        <a
                          href={blog[key].link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {blog[key].project}
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
