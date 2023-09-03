import Footer from '@/components/Footer'

const About = () => {
  return (
    <div className="about max-w-[36rem] m-auto text-center px-4">
      <div className="mb-16">
        <div className="border-b mb-16">
          <h1 className="text-5xl mt-36 leading-tight">Jii Eu</h1>
          <h2 className="text-md mb-8 leading-loose">Front-End Developer</h2>
          <div className="mb-8">
            <ul className="flex justify-evenly text-xs w-56 mx-auto">
              <li>
                <a
                  className="hover:line-through"
                  href="https://github.com/rolemadelen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="hover:line-through"
                  href="https://www.linkedin.com/in/jiieu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="content mb-10 text-left border-b pb-16">
          <p>
            I was born in
            <a href="https://www.google.com/search?q=andong+south+korea&oq=Andong+south+korea&sourceid=chrome&ie=UTF-8">
              Andong
            </a>
            , South Korea in the mid-1990s. Although I don&apos;t recall the
            exact year, I believe I was around 9 years old when our family
            relocated to Southern California. At that time, my knowledge of
            English was limited to just one word: <i>hello</i>. So, I spent the
            majority of my time with my only friend, Diablo II. I think
            it&apos;s fair to say that I was a game addict.
          </p>
          <p>
            One day, my sister called me over and showed me a program she had
            made in C. It displayed a prompt, <i>Enter your name</i>. I typed in
            my name, and it responded with, <i>Jii is an idiot</i>. This
            unexpected encounter served as my first exposure to programming. I
            found programming incredibly intriguing, far more captivating than
            any games I had played before. I self taught programming and as I
            spent more time with it, I gradually lost interest in playing games.
          </p>
          <p>
            After high school, I enrolled in a community college to study
            Computer Science. Then I transferred to UCSD pursuing Math-CS.
            However, my passion for understanding user experiences and
            interfaces led me to switch my major to Human-Computer-Interaction.
            As my fascination with web development grew, I began creating
            personal bolgs as a way to practice and refine my skills. Following
            my graduation from UCSD, I moved to Japan and got my first
            professional work experience as a front-end developer at a
            healthcare startup.
          </p>
          <p>
            After spending three years abroad, I returned to the States.
            Currently, I reside in Kentucky with my partner and our beloved
            German Shepherd puppy.
          </p>
          <p>
            That&apos;s about who I am. If there&apos;s something you want to
            know more about me or are interested in discussing potential remote
            opportunities, please don&apos;t hesitate to reach out to me via
            email at <a href="mailto:hello@jiieu.com">hello@jiieu.com</a>.
          </p>
        </div>
      </div>
      <Footer pageFrom="about" />
    </div>
  )
}

export default About
