function Tile({ value, onClick }) {
    return (
        <div
            className="tile"
            style={{ backgroundColor: value !== 0 ? '#2196F3' : 'transparent' }}
            onClick={value !== 0 ? onClick : null}
        >
            {value !== 0 ? value : ''}
        </div>
    );
}

export default Tile;
