import Tile from './Tile';

function Board({ tiles }) {
    return (
        <div className="board">
            {tiles.map((tile, index) => (
                <Tile key={index} value={tile} />
            ))}
        </div>
    );
}

export default Board;
