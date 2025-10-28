function Tile({ value, onClick }) {
    return (
        <div
            className="tile"
            style={{ backgroundColor: value !== 16 ? '#2196F3' : 'transparent' }}
            onClick={value !== 16 ? onClick : null}
        >
            {value !== 16 ? value : ''}
        </div>
    );
}

export default Tile;
