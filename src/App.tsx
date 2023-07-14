// @ts-nocheck
import { useState } from 'react'
import LeftHero from './assets/left-hero.png'
import Logo from './assets/logo.png'
import RightHero from './assets/right-hero.png'
import Countdown from 'react-countdown'
import ERLogo from './assets/erlogo.png'
import Cyberport from './assets/cyberport.png'
import { FaChevronDown, FaWpforms, FaUserClock } from 'react-icons/fa'
import { BsFacebook, BsInstagram, BsYoutube, BsDiscord } from 'react-icons/bs'
import { BiGame } from 'react-icons/bi'

const EVENT_DATE = new Date("July 26, 2023 24:00:00")
const FAQs = [
  {
    question: "Who is eligble to join?",
    answer: "Participants must be legal residents of any countries in the Americas, Europe and Asia-Pacific to join. A valid ID is required to register."
  },
  {
    question: "How do I know when I made it into the list?",
    answer: "We will notify successful registrants via Discord."
  },
  {
    question: "Where are the offline semifinals going to be held?",
    answer: <>Qualified participants will compete for semifinals offline in Cyberport, Hong Kong. {<br />}{<br />} Overseas participants (non-Hong Kong residents) qualified for the quarterfinals will receive flight & hotel allowants. Participants are responsible for making their own travel arrangements including but not limited to visa applications.</>
  },
]

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className='flex justify-between gap-10 font-banger text-md sm:text-xl md:text-2xl'>
        <div className='flex flex-col items-center'>
          <span>{days.toLocaleString('en-US', { minimumIntegerDigits: 2 })}</span>
          <span>Days</span>
        </div>
        <div className='flex flex-col items-center'>
          <span>{hours.toLocaleString('en-US', { minimumIntegerDigits: 2 })}</span>
          <span>Hours</span>
        </div>
        <div className='flex flex-col items-center'>
          <span>{minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 })}</span>
          <span>Minutes</span>
        </div>
        <div className='flex flex-col items-center'>
          <span>{seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 })}</span>
          <span>Seconds</span>
        </div>
      </div>

    )
  }
};

function App() {
  const [dropwdown, setDropdown] = useState({
    idx: -1,
    isOpen: false
  })

  function handleClick(idx: number) {
    setDropdown(state => ({ ...state, idx, isOpen: !state.isOpen }))

  }

  return (
    <>
      <header className='w-full bg-orion-nebula h-screen bg-no-repeat bg-center bg-cover flex justify-between items-center text-white'>
        <div className='self-end'>
          <img src={LeftHero} className='w-[30vw] h-auto lg:w-auto lg:h-screen' />
        </div>
        <div className='flex flex-col items-center h-[90%] justify-evenly'>
          <div>
            <Countdown date={EVENT_DATE} renderer={renderer} />
          </div>
          <img src={Logo} className='h-auto w-[20rem] lg:w-[28rem]' />
          <div className='cursor-pointer bg-red-button bg-contain bg-center bg-no-repeat flex items-center justify-center w-40 h-20 sm:w-48 md:w-52 lg:w-64 group font-banger'>
            <h1 className='text-xl sm:text-2xl md:text-3xl'><a href="https://docs.google.com/forms/d/e/1FAIpQLSeTsSBlBm5XEilcxhhx5JqRrII4Q6wWy3U3z3SvV-TV-aKbag/viewform">Register now</a></h1>
          </div>
        </div>
        <div className='self-end'>
          <img src={RightHero} className='w-[30vw] h-auto lg:w-auto lg:h-screen' />
        </div>
      </header>
      <main>
        <section className='w-full flex flex-col text-purple py-20 gap-4  px-10 justify-center md:items-center md:text-center bg-news bg-cover bg-no-repeat'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold font-banger'>Ready to snap?</h1>
          <p>Only 4 out of the 1024 gamers will get a chance to compete in the offline semifinals in Hong Kong.
          </p>
        </section>
        <section className='w-full bg-orion-nebula gap-20 bg-cover bg-center text-white flex py-20 flex-col px-10 lg:px-20 lg:py-32'>
          <h1 className='text-3xl font-bold text-center sm:text-4xl md:text-5xl'>How to join?</h1>
          <div className='w-full flex flex-col justify-center lg:flex-row'>
            <Card title='1. Register via Google Form' icon={<FaWpforms className="text-8xl" />} para="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." />
            <Card title='2. Wait for the invite to the tournament Discord Channel' icon={<BsDiscord className="text-8xl" />} para="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." />
            <Card title='3. Prepare your decks' icon={<FaUserClock className="text-8xl" />} para="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." />
          </div>
        </section>
        <section className='w-full px-10 bg-news bg-cover bg-no-repeat bg-center py-20 flex flex-col gap-10 items-center lg:py-32'>
          <h1 className='text-3xl md:text-4xl font-bold text-purple'>FREQUENTLY ASKED QUESTIONS</h1>
          {FAQs.map((item, idx) => (
            <DropDown
              question={item.question}
              answer={item.answer}
              handleClick={handleClick}
              index={idx + 1}
              state={dropwdown}
              key={idx}
            />
          ))}
        </section>
        <section className='w-full py-20 px-10 flex flex-col items-center gap-10 text-gray-500'>
          <h1 className='text-xl md:text-xl font-medium'>Powered by</h1>
          <div className='flex w-full justify-center gap-16 sm:gap-20 md:gap-28 '>
            <img className='h-20 w-auto ' src={ERLogo}/>
            <img className='h-20 w-auto ' src={Cyberport}/>
          </div>

        </section>
        <section className='w-full bg-cover bg-center py-20 bg-no-repeat flex flex-col gap-4 justify-center items-center px-10 lg:px-32 lg:py-32'>
          <div className='w-full flex gap-10 justify-between items-center flex-wrap text-black'>
            <div className='w-full'>
              <h1 className='font-bold text-black text-3xl sm:text-4xl md:text-5xl'>Partner with Us</h1>
              <br />
              <p><strong>Marvel Snappers Assemble</strong> offers brands and organizations an extraordinary platform to embrace the power of inclusivity in eSports. Organized by <strong><a href='https://www.eresports.com'>ER Esports</a></strong>, this groundbreaking event serves as a rallying point for those seeking to tap into the expansive and diverse community of gamers in Asia. </p>
              <br />
              <p><strong>Marvel Snappers Assemble</strong> offers a variety of partnership opportunities tailored to suit the objectives and aspirations of each brand. From event sponsorship to customized activations, brands can collaborate with the ER Esports to create impactful experiences that align with their core values and resonate with the eSports community.</p>
            </div>
          </div>
        </section>
        <section className='w-full bg-center flex flex-col gap-10 items-center justify-center py-28 lg:py-40 bg-orange bg-cover bg-center '>
          <h1 className='text-5xl font-bold text-purple font-banger'>Be Our Partner</h1>
          <div className='w-[80%] md:w-[60%] lg:w-[40%]'>
            <form className='flex flex-col gap-1 items-center' method='POST' action='https://formsubmit.co/info@eresports.com'>
              <input type='text' placeholder='Your name' name='name' className='w-full shadow-lg rounded-full border border-white bg-transparent-card px-6 py-2 text-white' />
              <input type='email' placeholder='Your email address' name="email" className='w-full rounded-full border border-white bg-transparent-card px-6 py-2 text-white' />
              <textarea placeholder='Additional information' name="message" className='w-full rounded-2xl border border-white bg-transparent-card px-6 py-4 text-white h-40 ' />
              <button type='submit' className=' mt-10 cursor-pointer bg-purple-button bg-contain bg-center bg-no-repeat flex items-center justify-center w-56 h-20 group font-banger'>
                <h1 className='text-2xl text-white'>Send</h1>
              </button>

            </form>
          </div>
        </section>
      </main>
      <footer className='w-full relative flex h-56 flex-col justify-end relaive'>
        <div className='w-full bg-footer bg-no-repeat bg-cover h-72 bg-center absolute flex flex-col gap-2 justify-end items-center py-10'>
          <div className='z-50 text-white flex text-2xl gap-4 items-center'>
            <a href="https://www.facebook.com/EREsports.official">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/eresportsnews/">
              <BsInstagram />
            </a>
            <a href="https://youtube.com/@eresports1897">
              <BsYoutube />
            </a>
          </div>
          <div className='text-gray-700 z-50 text-center text-xs'>
            <p><a href='https://eresports.com/privacy-policy/'>Privacy Policy</a> | <a href='https://eresports.com/terms-of-use/'>Terms of Use</a> </p>
            <p>Copyright © 2023 ERESPORTS LIMITED. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function DropDown({ state, question, answer, handleClick, index }) {
  return (
    <div className='w-full lg:w-[75%] bg-white shadow-lg border border-purple py-10 rounded-xl flex flex-col px-10 justify-between gap-2 cursor-pointer' onClick={() => handleClick(index)}>
      <div className='flex justify-between w-full items-center gap-6'>
        <p className='text-xl font-bold text-purple'>{question}</p>
        <FaChevronDown className={`cursor-pointer text-purple ${state.idx === index && state.isOpen ? 'open' : 'close'}`} />
      </div>
      {state.isOpen && state.idx === index && (
        <p className='text-sm text-gray-700'>{answer}</p>
      )}
    </div>

  )
}

function Card({ title, para, icon }: { title: string, para: string }) {
  return (
    <div className='py-10 flex flex-col justify-start items-center gap-4 lg:px-10'>
      {icon}
      <h1 className='font-bold text-xl text-center'>{title}</h1>
    </div>
  )
}

export default App
