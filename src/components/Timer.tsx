import React from 'react'

interface TimerProps {
    hasStarted: boolean,
    onClick: () => void,
    secondsLeft: number,
    formatTimeLeft: (secondsLeft: number) => string
}

const Timer = ({ hasStarted, onClick, secondsLeft, formatTimeLeft }: TimerProps) => {

  return (
    <div
        className='flex flex-col relative md:w-[500px] md:h-[500px] w-[90vw] h-[90vw] mt-15 p-5 rounded-full bg-gradient-to-br from-[#151932] to-[#282c51] cursor-pointer'
        onClick={onClick}
    >
        <div
            className='flex flex-col relative items-center justify-center w-full h-full rounded-full bg-[#151932]'
        >
            <svg viewBox="0 0 250 250" className='absolute w-full h-full'>
                <circle className="bg"
                    cx="125" cy="125" r="115" fill="none" stroke="#ddd" stroke-width="5"
                ></circle>
                <circle className="fg origin-[125px] rotate-[-90deg]"
                    cx="125" cy="125" r="115" fill="none" stroke="#f87072" stroke-width="5"
                ></circle>
            </svg>
            <p
                className='md:text-9xl text-7xl font-bold text-white'
            >
                { formatTimeLeft(secondsLeft) }
            </p>
            <p
                className='text-4xl font-bold text-white mt-8'
            >
                { (hasStarted) ? 'Pause' : 'Start' }
            </p>
        </div>
    </div>
  )
}

export default Timer