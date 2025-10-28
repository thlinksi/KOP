import { useState, useEffect } from 'react';

export const useTimer = (isActive) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (isActive) {
            const interval = setInterval(() => {
                setTime(time + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [time, isActive]); 
    return { time };
};
