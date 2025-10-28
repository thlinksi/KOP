import Tile from './Tile';

function Board({ tiles, onTileClick }) {
    return (
        <div className="board">
            {tiles.map((tile, index) => (
                <Tile key={index} value={tile} onClick={() => onTileClick(index)} />
            ))}
        </div>
    );
}

export default Board;
