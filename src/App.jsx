import { useState } from 'react';
import Header from './components/Header';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultsPage from './pages/ResultsPage';
import './index.css';

function App() {
    const [currentPage, setCurrentPage] = useState('start');
    const [gameState, setGameState] = useState({ tiles: [], moves: 0, time: 0 });
    const [results, setResults] = useState([]);

    const handlePageChange = (page, newGameState = null) => {
        if (page === 'results' && newGameState) {
            setResults([...results, { moves: newGameState.moves, time: newGameState.time }]);
        }
        setCurrentPage(page);
        if (newGameState) setGameState(newGameState);
    };

    return (
        <div className="container">
            <Header />
            {currentPage === 'start' && <StartPage onStart={() => handlePageChange('game')} />}
            {currentPage === 'game' && (
                <GamePage
                    onEnd={(finalState) => handlePageChange('results', finalState)}
                />
            )}
            {currentPage === 'results' && (
                <ResultsPage
                    gameState={gameState}
                    results={results}
                    onRestart={() => handlePageChange('start')}
                />
            )}
        </div>
    );
}

export default App;
