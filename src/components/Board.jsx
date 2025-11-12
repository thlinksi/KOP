import Tile from './Tile';

function Board({ tiles, onTileClick, gridSize }) {
    return (
        <div
            className="board"
            style={{ gridTemplateColumns: `repeat(${gridSize}, 70px)` }}
        >
            {tiles.map((tile, index) => (
                <Tile key={index} value={tile} onClick={() => onTileClick(index)} />
            ))}
        </div>
    );
}

export default Board;
