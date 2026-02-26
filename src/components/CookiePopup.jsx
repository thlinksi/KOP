import { useState, useEffect } from 'react';

function CookiePopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('gdpr-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('gdpr-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed', bottom: 0, left: 0, right: 0,
            background: '#2B373B', color: 'white', padding: '15px 20px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            zIndex: 9999, fontSize: '14px', boxShadow: '0 -2px 10px rgba(0,0,0,0.3)'
        }}>
            <p style={{ margin: 0, paddingRight: '20px', lineHeight: '1.4' }}>
                Цей веб-сайт використовує локальне сховище (Local Storage) браузера для збереження вашого прогресу, налаштувань складності та історії результатів згідно з правилами GDPR. Ми не збираємо і не передаємо ваші персональні дані третім особам.
            </p>
            <button
                onClick={handleAccept}
                style={{
                    background: '#4CAF50', color: 'white', border: 'none',
                    padding: '10px 15px', borderRadius: '5px', cursor: 'pointer',
                    fontWeight: 'bold', whiteSpace: 'nowrap'
                }}
            >
                Зрозуміло та Згоден
            </button>
        </div>
    );
}

export default CookiePopup;