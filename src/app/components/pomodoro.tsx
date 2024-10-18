"use client"
import { useState, useEffect } from "react";

interface ModeDuration {
    pomodoro: number; // 25 minutes in seconds
    shortBreak: number; // 5 minutes in seconds
    longBreak: number; // 15 minutes in seconds
}

const modeDuration: ModeDuration = {
    pomodoro: 1500,
    shortBreak: 300,
    longBreak: 900
};

function Pomodoro(){
    const [selectedMode, setSelectedMode] = useState<string>('pomodoro');
    const [timer, setTimer] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(1500); // Initialize with pomodoro duration

    useEffect(() => {
        setTimer(modeDuration[selectedMode as keyof ModeDuration]);
        setIsRunning(false); // Change button state to stop when mode changes
    }, [selectedMode]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer === 1) {
                        clearInterval(interval!);
                        setIsRunning(false);
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }
        
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning]);
    
    useEffect(() => {
        document.title = `${formatTime(timer)} - Pomodoro Timer`;
        return () => {
            document.title = "Pomodoro Timer"; // Reset title when component unmounts or timer stops
        };
    }, [timer]); // Update title whenever timer changes

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return(
        <div className="min-w-[300px] max-w-[300px] md:min-w-[500px] md:max-w-[500px] bg-pink rounded-lg flex justify-center items-center shadow-lg">
            <div className="flex flex-col gap-7 py-5">

                <div className="flex gap-3 justify-center px-3">
                    <div className={`px-3 py-1 hover:cursor-pointer rounded-md ${selectedMode === 'pomodoro' ? 'bg-overlayColor' : ''}`} onClick={() => setSelectedMode('pomodoro')}>
                        <p className="font-bold text-sm md:text-base">Pomodoro</p>
                    </div>
                    <div className={`px-3 py-1 hover:cursor-pointer rounded-md ${selectedMode === 'shortBreak' ? 'bg-overlayColor' : ''}`} onClick={() => setSelectedMode('shortBreak')}>
                        <p className="font-bold text-sm md:text-base">Short break</p>
                    </div>
                    <div className={`px-3 py-1 hover:cursor-pointer rounded-md ${selectedMode === 'longBreak' ? 'bg-overlayColor' : ''}`} onClick={() => setSelectedMode('longBreak')}>
                        <p className="font-bold text-sm md:text-base">Long break</p>
                    </div>
                </div>

                <div className="text-center py-1">
                    <p className="text-6xl md:text-9xl font-bold">{formatTime(timer)}</p>
                </div>

                <div className="flex justify-center">
                    <button className="shadow-lg font-bold text-lg md:text-2xl bg-white text-pink rounded-md py-1 md:py-3 w-24 md:w-44" onClick={isRunning ? stopTimer : startTimer}>{isRunning ? 'Stop' : 'Start'}</button>
                </div>

                
            </div>
        </div>
    )
}

export default Pomodoro;
