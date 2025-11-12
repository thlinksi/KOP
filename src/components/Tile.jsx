function Tile({ value, onClick }) {
    return (
        <div
            className="tile"
            data-value={value}
            onClick={value !== 0 ? onClick : null}
        >
            {value !== 0 ? value : ''}
        </div>
    );
}

export default Tile;
