import { useState } from 'react';
import Board from '../components/Board';
import Button from '../components/Button';

function GamePage({ gameState, setGameState, onEnd }) {
    const [localTime, setLocalTime] = useState(0);

    return (
        <>
            <h2>Основна сторінка гри</h2>
            <Board tiles={gameState.tiles} />
            <p>Кроки: {gameState.moves} | Час: {gameState.time} сек</p>
            <Button onClick={onEnd} color="#f44336">Завершити гру</Button>
        </>
    );
}

export default GamePage;
