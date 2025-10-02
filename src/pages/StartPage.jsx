import Button from '../components/Button.jsx';

function StartPage({ onStart }) {
    return (
        <>
            <h2>Стартова сторінка</h2>
            <p>Ласкаво просимо до гри П'ятнашки!</p>
            <Button onClick={onStart} color="#4CAF50">Почати гру</Button>
        </>
    );
}

export default StartPage;
