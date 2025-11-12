import { useState, useCallback, useEffect } from 'react';

export const useGame = (gridSize = 4) => {
    const totalTiles = gridSize * gridSize;
    const winState = Array.from({ length: totalTiles - 1 }, (_, i) => i + 1).concat(0);

    const generateInitialPuzzle = () => {
        let puzzle;
        do {
            puzzle = Array.from({ length: totalTiles - 1 }, (_, i) => i + 1).concat(0);
            puzzle.sort(() => Math.random() - 0.5);
        } while (!isSolvable(puzzle, gridSize));
        return puzzle;
        // швидка перевірка виграшу 4х4
        // return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15];
        // швидка перевірка виграшу 5х5
       // return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 24];
        // швидка перевірка виграшу 6х6
       // return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 0, 35]
    };

    const isSolvable = (arr, size) => {
        let inversions = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) continue;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] !== 0 && arr[i] > arr[j]) inversions++;
            }
        }
        const emptyRow = Math.floor(arr.indexOf(0) / size);
        const gridWidth = size;
        return (inversions + emptyRow) % 2 === 0 || gridWidth % 2 === 1;
    };

    const [tiles, setTiles] = useState(generateInitialPuzzle);
    const [moves, setMoves] = useState(0);
    const [isWon, setIsWon] = useState(false);
    const [resetTrigger, setResetTrigger] = useState(0);

    const resetGame = useCallback(() => {
        setTiles(generateInitialPuzzle());
        setMoves(0);
        setIsWon(false);
        setResetTrigger((prev) => prev + 1);
    }, [gridSize]);

    useEffect(() => {
        resetGame();
    }, [gridSize, resetGame]);

    const moveTile = useCallback((index) => {
        const emptyIndex = tiles.indexOf(0);
        if (!isAdjacent(index, emptyIndex, gridSize)) return;

        const newTiles = [...tiles];
        [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
        setTiles(newTiles);
        setMoves((m) => m + 1);
        checkWin(newTiles);
        // setIsWon(true); // перевірка вікна виграшу, застосовується після 1 кроку
    }, [tiles, gridSize]);

    const isAdjacent = (i, j, size) => {
        const rowI = Math.floor(i / size), colI = i % size;
        const rowJ = Math.floor(j / size), colJ = j % size;
        return Math.abs(rowI - rowJ) + Math.abs(colI - colJ) === 1;
    };

    const checkWin = (currentTiles) => {
        setIsWon(currentTiles.every((t, i) => t === winState[i]));
    };

    return {
        tiles,
        moves,
        isWon,
        resetGame,
        moveTile,
        resetTrigger,
        gridSize,
    };
};
