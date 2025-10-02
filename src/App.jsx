import { useState } from 'react';

function App() {
    const [currentPage, setCurrentPage] = useState('start');
    const [gameState, setGameState] = useState({
        tiles: Array(16).fill(null),
        moves: 0,
        time: 0,
    });
    const [results, setResults] = useState([]);

    const handleStartGame = () => {
        setCurrentPage('game');
    };

    const handleEndGame = () => {
        setCurrentPage('results');
    };

    const handleRestart = () => {
        setCurrentPage('start');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial' }}>
            <h1 style={{ marginBottom: '20px' }}>П'ятнашки</h1>

            {currentPage === 'start' && (
                <div style={{ textAlign: 'center' }}>
                    <h2>Стартова сторінка</h2>
                    <p>Ласкаво просимо до гри П'ятнашки!</p>
                    <button
                        onClick={handleStartGame}
                        style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
                    >
                        Почати гру
                    </button>
                </div>
            )}

            {currentPage === 'game' && (
                <div style={{ textAlign: 'center' }}>
                    <h2>Основна сторінка гри</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 80px)', gap: '5px', margin: '20px auto' }}>
                        {gameState.tiles.map((tile, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '80px', height: '80px', backgroundColor: tile ? '#2196F3' : 'transparent',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', border: '1px solid #ccc'
                                }}
                            >
                                {tile || ''}
                            </div>
                        ))}
                    </div>
                    <p>Кроки: {gameState.moves} | Час: {gameState.time} сек</p>
                    <button
                        onClick={handleEndGame}
                        style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}
                    >
                        Завершити гру
                    </button>
                </div>
            )}

            {currentPage === 'results' && (
                <div style={{ textAlign: 'center' }}>
                    <h2>Сторінка результатів</h2>
                    <p>Ваш результат: {gameState.moves} кроків, {gameState.time} сек</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {results.map((result, index) => (
                            <li key={index}>{`Рекорд ${index + 1}: ${result.moves} кроків, ${result.time} сек`}</li>
                        ))}
                    </ul>
                    <button
                        onClick={handleRestart}
                        style={{ padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', cursor: 'pointer' }}
                    >
                        Повернутися на старт
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
