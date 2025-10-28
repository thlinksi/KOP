import { useState } from 'react';

export const useGame = () => {
    const [tiles, setTiles] = useState(Array.from({ length: 16 }, (_, i) => i + 1));
    const [moves, setMoves] = useState(0);
    const [isWon, setIsWon] = useState(false);

    const shuffle = () => {
        setTiles([...tiles]);
    };

    const moveTile = (index) => {

        const newTiles = [...tiles];
        const emptyIndex = newTiles.indexOf(16);
        newTiles[emptyIndex] = newTiles[index];
        newTiles[index] = 16;
        setTiles(newTiles);
        setMoves(moves + 1);
        checkWin(newTiles);
    };

    const checkWin = (currentTiles) => {
        const sorted = [...currentTiles].sort((a, b) => a - b);
        setIsWon(currentTiles.every((tile, i) => tile === sorted[i]));
    };

    return { tiles, moves, isWon, shuffle, moveTile };
};
