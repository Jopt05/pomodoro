import React from 'react'

interface ModeSelectorProps {
    onChangeMode: (mode: number) => void
    selectedMode: number
}

const ModeSelector = ({ onChangeMode, selectedMode }: ModeSelectorProps) => {

    const getMovementPercentage = () => {
        if (selectedMode === 0) {
            return 'left-[1%]';
        } else if (selectedMode === 1) {
            return 'left-[35%]';
        } else {
            return 'left-[68%]';
        }
    }

  return (
    <div
        className='flex md:w-[500px] w-[95%] gap-1 bg-[#151932] relative items-center mt-8 rounded-full p-1'
    >
        <div
            className={`flex flex-1/3 md:py-6 md:px-10 py-3 px-2 absolute bg-red-400 rounded-full z-10 transition-all ${getMovementPercentage()}`}
        >
            <p className='opacity-0'>
                pomodoro
            </p>
        </div>
        <div
            className='flex flex-1/3 justify-center cursor-pointer'
            onClick={() => onChangeMode(0)}
        >
            <p
                className={`w-full md:py-6 md:px-10 py-3 px-2 font-bold text-sm rounded-full text-center m-0 text-[#62667f] z-20 ${(selectedMode === 0) && 'text-[#151932]'}`}
            >
                pomodoro
            </p>
        </div>
        <div
            className='flex flex-1/3 justify-center cursor-pointer'
            onClick={() => onChangeMode(1)}
        >
            <p
                className={`w-full md:py-6 md:px-10 py-3 px-2 font-bold text-sm rounded-full text-center m-0 text-[#62667f] z-20 ${(selectedMode === 1) && 'text-[#151932]'}`}
            >
                short break
            </p>
        </div>
        <div
            className='flex flex-1/3 justify-center cursor-pointer'
            onClick={() => onChangeMode(2)}
        >
            <p
                className={`w-full md:py-6 md:px-10 py-3 px-2 font-bold text-sm rounded-full text-center m-0 text-[#62667f] z-20 ${(selectedMode === 2) && 'text-[#151932]'}`}
            >
                long break
            </p>
        </div>
    </div>
  )
}

export default ModeSelector