import React, { useEffect, useState } from 'react'
import ModeSelector from '../components/ModeSelector';
import Timer from '../components/Timer';

let timer: number | undefined;

const Home = () => {

    const [selectedMode, setSelectedMode] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(1500)
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if( !hasStarted ) return;
      document.title = `(${formatTimeLeft(secondsLeft)}) Pomodoro`;
    }, [secondsLeft])

    const handleChangeMode = (value: number) => {
        setHasStarted(false);
        const timerMap = [1500, 900, 1800];
        clearInterval(timer);
        setSecondsLeft(timerMap[value]);
        setSelectedMode(value);
    }

    const formatTimeLeft = (seconds: number) => {
        return(`${Math.floor(seconds / 60)}:${
                (seconds % 60 > 9)
                ? seconds % 60
                : '0' + seconds % 60
            }`)
    }

    const startTimer = () => {
        if (hasStarted) return;
        setHasStarted(true);
        timer = setInterval(() => {
            setSecondsLeft(s => s - 1);
            if (secondsLeft === 0) {
                clearInterval(timer);
                setHasStarted(false);
            }
        }, 1000);
    }

    const stopTimer = () => {
        setHasStarted(false);
        clearInterval(timer);
    }

  return (
    <div
        className='flex flex-col w-full h-screen items-center'
    >
        <h1
            className='text-3xl font-bold text-[#d5dcfa] mt-20'
        >
            Pomodoro
        </h1>
        <ModeSelector onChangeMode={handleChangeMode} selectedMode={selectedMode} />
        <Timer 
            hasStarted={hasStarted} 
            onClick={() => (hasStarted) ? stopTimer() : startTimer() } 
            secondsLeft={secondsLeft} 
            formatTimeLeft={formatTimeLeft} 
        />
    </div>
  )
}

export default Home