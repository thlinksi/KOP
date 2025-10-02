function Button({ onClick, children, color = '#2196F3' }) {
    return (
        <button onClick={onClick} style={{ backgroundColor: color, color: 'white' }}>
            {children}
        </button>
    );
}

export default Button;
