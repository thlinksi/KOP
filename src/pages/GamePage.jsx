import { useState, useEffect } from 'react';
import Board from '../components/Board';
import WinDialog from '../components/WinDialog';
import Button from '../components/Button';
import { useGame } from '../hooks/useGame';
import { useTimer } from '../hooks/useTimer';

function GamePage({ gridSize, difficulty, onEnd, onRestart, onNextLevel }) {
    const { tiles, moves, isWon, resetGame, moveTile, resetTrigger } = useGame(gridSize);
    const { time } = useTimer(!isWon, resetTrigger);
    const [showWinDialog, setShowWinDialog] = useState(false);

    useEffect(() => {
        if (isWon) setShowWinDialog(true);
    }, [isWon]);

    const handleRestart = () => {
        resetGame();
        setShowWinDialog(false);
    };

    const handleNextLevel = () => {
        setShowWinDialog(false);
        onNextLevel();
    };

    const handleViewResults = () => {
        setShowWinDialog(false);
        onEnd({ moves, time });
    };

    return (
        <>
            <h2 className="page-title">П'ятнашки {gridSize}×{gridSize}</h2>
            <Board tiles={tiles} onTileClick={moveTile} gridSize={gridSize} />
            <p className="info-text">
                Кроки: {moves} | Час: {time} сек | Рівень: {difficulty}
            </p>

            <div className="button-group">
                <Button onClick={resetGame} className="btn-orange">Нова гра</Button>
                <Button onClick={() => onEnd({ moves, time })} className="btn-red">
                    Завершити
                </Button>
            </div>

            {showWinDialog && (
                <WinDialog
                    moves={moves}
                    time={time}
                    onRestart={handleRestart}
                    onNextLevel={handleNextLevel}
                    difficulty={difficulty}
                    onViewResults={handleViewResults}
                />
            )}
        </>
    );
}

export default GamePage;
