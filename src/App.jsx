import { useState, useEffect } from 'react';
import Header from './components/Header';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultsPage from './pages/ResultsPage';
import './index.css';

function App() {
    const [currentPage, setCurrentPage] = useState('start');
    const [results, setResults] = useState(() => {
        const saved = localStorage.getItem('puzzleResults');
        return saved ? JSON.parse(saved) : [];
    });
    const [difficulty, setDifficulty] = useState(() => {
        const saved = localStorage.getItem('puzzleDifficulty');
        return saved ? parseInt(saved) : 1;
    });

    useEffect(() => {
        localStorage.setItem('puzzleDifficulty', difficulty);
    }, [difficulty]);

    useEffect(() => {
        localStorage.setItem('puzzleResults', JSON.stringify(results));
    }, [results]);

    const gridSize = difficulty === 1 ? 4 : difficulty === 2 ? 5 : 6;

    const handlePageChange = (page, finalState = null) => {
        if (finalState) {
            setResults(prev => [...prev, { ...finalState, difficulty }]);
        }
        setCurrentPage(page);
    };

    const handleNextLevel = () => {
        if (difficulty < 3) {
            setDifficulty(difficulty + 1);
        }
        handlePageChange('game');
    };

    const clearResults = () => {
        setResults([]);
        localStorage.removeItem('puzzleResults');
    };

    return (
        <div className="container">
            <Header />
            {currentPage === 'start' && (
                <StartPage
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    onStart={() => handlePageChange('game')}
                />
            )}
            {currentPage === 'game' && (
                <GamePage
                    gridSize={gridSize}
                    difficulty={difficulty}
                    onEnd={(state) => handlePageChange('results', state)}
                    onRestart={() => handlePageChange('game')}
                    onNextLevel={handleNextLevel}
                />
            )}
            {currentPage === 'results' && (
                <ResultsPage
                    results={results}
                    onRestart={() => handlePageChange('start')}
                    onClearResults={clearResults}
                />
            )}
        </div>
    );
}

export default App;
