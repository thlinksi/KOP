function Tile({ value }) {
    return (
        <div className="tile" style={{ backgroundColor: value ? '#2196F3' : 'transparent' }}>
            {value || ''}
        </div>
    );
}

export default Tile;
