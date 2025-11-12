import Button from '../components/Button';

function ResultsPage({ results, onRestart, onClearResults }) {
    const handleClear = () => {
        if (window.confirm('Ви впевнені, що хочете стерти всі результати?')) {
            onClearResults();
        }
    };

    return (
        <>
            <h2 className="page-title">Сторінка результатів</h2>
            {results.length === 0 ? (
                <p className="info-text">Ще немає результатів.</p>
            ) : (
                <ul className="results-list">
                    {results.map((result, index) => (
                        <li key={index}>
                            Рекорд {index + 1}: Рівень {result.difficulty} — {result.moves} кроків, {result.time} сек
                        </li>
                    ))}
                </ul>
            )}
            <div className="button-group">
                <Button onClick={onRestart} className="btn-blue">
                    Повернутися на старт
                </Button>
                {results.length > 0 && (
                    <Button onClick={handleClear} className="btn-red">
                        Стерти попередні результати
                    </Button>
                )}
            </div>
        </>
    );
}

export default ResultsPage;
