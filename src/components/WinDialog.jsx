import { createPortal } from 'react-dom';
import Button from './Button';

function WinDialog({ moves, time, difficulty, onRestart, onNextLevel, onViewResults }) {
    const canGoNext = difficulty < 3;

    return createPortal(
        <div className="win-dialog-overlay">
            <div className="win-dialog">
                <h2>Вітаємо!</h2>
                <p>Ви зібрали пазл!</p>
                <p>
                    <strong>{moves} кроків</strong> за <strong>{time} сек</strong>
                </p>
                <div className="button-group">
                    <Button onClick={onRestart} className="btn-orange">
                        Грати ще раз
                    </Button>

                    {canGoNext && (
                        <Button onClick={onNextLevel} className="btn-green">
                            Наступна складність
                        </Button>
                    )}

                    <Button onClick={onViewResults} className="btn-blue">
                        Результати
                    </Button>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default WinDialog;
