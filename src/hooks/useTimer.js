import { useState, useEffect } from 'react';

export const useTimer = (isActive, resetTrigger = 0) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setTime(0);
    }, [resetTrigger]);

    useEffect(() => {
        let interval;
        if (isActive) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    return { time };
};
