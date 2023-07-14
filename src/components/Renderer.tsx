import Countdown from "react-countdown";

const Completionist = () => <span className='font-banger'>Happening now!</span>;


export default function MarvelSnapCountDown({ date }: { date: Date }) {
  return (
    <div className="">
      <Countdown
        date={date}
        renderer={renderer}
      />
    </div>
  )

}

export const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className='flex justify-between gap-10 font-banger text-lg sm:text-xl md:text-2xl'>
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

}
