import Button from '../components/Button';

function ResultsPage({ gameState, results, onRestart }) {
    return (
        <>
            <h2>Сторінка результатів</h2>
            <p>Ваш результат: {gameState.moves} кроків, {gameState.time} сек</p>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{`Рекорд ${index + 1}: ${result.moves} кроків, ${result.time} сек`}</li>
                ))}
            </ul>
            <Button onClick={onRestart}>Повернутися на старт</Button>
        </>
    );
}

export default ResultsPage;
