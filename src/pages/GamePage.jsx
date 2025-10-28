import Button from '../components/Button';
import Board from '../components/Board';
import { useGame } from '../hooks/useGame';
import { useTimer } from '../hooks/useTimer';
import { useEffect } from 'react';

function GamePage({ onEnd }) {
    const { tiles, moves, isWon, shuffle, moveTile } = useGame();
    const { time } = useTimer(!isWon);

    useEffect(() => {
        shuffle();
    }, []);

    useEffect(() => {
        if (isWon) {
            onEnd({ moves, time });
        }
    }, [isWon, moves, time, onEnd]);

    return (
        <>
            <h2>Основна сторінка гри</h2>
            <Board tiles={tiles} onTileClick={moveTile} /> {}
            <p>Кроки: {moves} | Час: {time} сек</p>
            <Button onClick={() => onEnd({ moves, time })} color="#f44336">Завершити гру</Button>
        </>
    );
}

export default GamePage;
