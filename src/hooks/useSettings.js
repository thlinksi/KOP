import { useState, useEffect } from 'react';

const DEFAULT_SETTINGS = { difficulty: 1 };

export const useSettings = () => {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('puzzleSettings');
        return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    });

    useEffect(() => {
        localStorage.setItem('puzzleSettings', JSON.stringify(settings));
    }, [settings]);

    const updateDifficulty = (difficulty) => {
        setSettings({ difficulty });
    };

    const gridSize = settings.difficulty === 1 ? 4 : settings.difficulty === 2 ? 5 : 6;

    return { ...settings, gridSize, updateDifficulty };
};
