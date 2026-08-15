import { useState } from "react";
import { board as startingBoard } from "../config/board";
import type { Square as SquareType } from "../types/board";
import Square from "./Square";

function Board() {
  const [board, setBoard] = useState(startingBoard);

  function handlePieceMoved(
    startingSquare: SquareType,
    destinationSquare: SquareType,
  ) {
    const newBoard = { ...board };
    const piece = newBoard[startingSquare]!;

    newBoard[startingSquare] = undefined;
    newBoard[destinationSquare] = piece;

    setBoard(newBoard);
  }

  return (
    <section className="grid grid-cols-8">
      {Object.entries(board).map(([square, piece]) => (
        <Square
          key={square}
          square={square as SquareType}
          piece={piece}
          onPieceMoved={handlePieceMoved}
        />
      ))}
    </section>
  );
}

export default Board;
