import { useState, useCallback } from 'react';

const generateInitialPuzzle = () => {
    let puzzle;
    do {
        puzzle = Array.from({ length: 15 }, (_, i) => i + 1).concat(0);
        puzzle.sort(() => Math.random() - 0.5);
    } while (!isSolvable(puzzle));
    return puzzle;
};

const isSolvable = (arr) => {
    let inversions = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) continue;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] !== 0 && arr[i] > arr[j]) inversions++;
        }
    }
    const emptyRow = Math.floor(arr.indexOf(0) / 4);
    return (inversions + emptyRow) % 2 === 0;
};

export const useGame = () => {
    const [tiles, setTiles] = useState(generateInitialPuzzle);
    const [moves, setMoves] = useState(0);
    const [isWon, setIsWon] = useState(false);

    const resetGame = useCallback(() => {
        setTiles(generateInitialPuzzle());
        setMoves(0);
        setIsWon(false);
    }, []);

    const moveTile = useCallback((index) => {
        const emptyIndex = tiles.indexOf(0);
        if (!isAdjacent(index, emptyIndex)) return;

        const newTiles = [...tiles];
        [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
        setTiles(newTiles);
        setMoves((m) => m + 1);
        checkWin(newTiles);
    }, [tiles]);

    const isAdjacent = (i, j) => {
        const rowI = Math.floor(i / 4), colI = i % 4;
        const rowJ = Math.floor(j / 4), colJ = j % 4;
        return Math.abs(rowI - rowJ) + Math.abs(colI - colJ) === 1;
    };

    const checkWin = (currentTiles) => {
        const win = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
        setIsWon(currentTiles.every((t, i) => t === win[i]));
    };

    return {
        tiles,
        moves,
        isWon,
        resetGame,
        moveTile,
    };
};
