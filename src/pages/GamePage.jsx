import { useEffect } from 'react';
import Button from '../components/Button';
import Board from '../components/Board';
import { useGame } from '../hooks/useGame';
import { useTimer } from '../hooks/useTimer';

function GamePage({ onEnd }) {
    const { tiles, moves, isWon, resetGame, moveTile } = useGame();
    const { time } = useTimer(!isWon);

    useEffect(() => {
        if (isWon) {
            onEnd({ moves, time });
        }
    }, [isWon, moves, time, onEnd]);

    return (
        <>
            <h2>Основна сторінка гри</h2>
            <Board tiles={tiles} onTileClick={moveTile} />
            <p>Кроки: {moves} | Час: {time} сек</p>

            <div style={{ marginTop: '15px' }}>
                <Button onClick={resetGame} color="#ff9800">
                    Нова гра
                </Button>
                {' '}
                <Button onClick={() => onEnd({ moves, time })} color="#f44336">
                    Завершити гру
                </Button>
            </div>
        </>
    );
}

export default GamePage;
