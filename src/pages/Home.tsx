import { useEffect, useState } from 'react'
import ModeSelector from '../components/ModeSelector';
import Timer from '../components/Timer';

let timer: number | undefined;

const Home = () => {

    const [selectedMode, setSelectedMode] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const [timerState, setTimerState] = useState({
        minutes: 25,
        seconds: 0
    })

    const handleChangeMode = (value: number) => {
        setHasStarted(false);
        const timerMap = [1500, 900, 1800];
        clearInterval(timer);
        setTimerState({
            minutes: Math.floor(timerMap[value] / 60),
            seconds: timerMap[value] % 60
        });
        setSelectedMode(value);
    }

    const startTimer = () => {
        if (hasStarted) return;
        setHasStarted(true);
        timer = setInterval(() => {
            setTimerState(s => {
                if (s.seconds === 0) {
                    if (s.minutes === 0) {
                        clearInterval(timer);
                        setHasStarted(false);
                        return s;
                    }
                    return {    
                        minutes: s.minutes - 1,
                        seconds: 59
                    }
                }
                return {
                    ...s,
                    seconds: s.seconds - 1
                }
            });
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
            timerState={timerState}
        />
    </div>
  )
}

export default Home