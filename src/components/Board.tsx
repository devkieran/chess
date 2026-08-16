import { useState } from "react";
import { board as startingBoard } from "../config/board";
import type { Square as SquareType } from "../types/board";
import Square from "./Square";

function Board() {
  const [board, setBoard] = useState(startingBoard);
  const [selectedSquare, setSelectedSquare] = useState<SquareType>();

  function handleSquareClicked(square: SquareType) {
    if (!selectedSquare) {
      if (board[square]) {
        setSelectedSquare(square);
      } else {
        console.info("Square doesn't have any piece to select");
      }

      return;
    }

    const selectedPiece = board[selectedSquare]!; // assert as if a square has been selected then it must have had a piece
    const pieceToCapture = board[square];

    // TODO: piece logic...
    // if (selectedPiece.type === "pawn") {

    // }

    if (!pieceToCapture) {
      const newBoard = { ...board };
      newBoard[square] = selectedPiece;
      newBoard[selectedSquare] = undefined;
      setBoard(newBoard);
      setSelectedSquare(undefined);

      return;
    }

    if (selectedPiece.colour === pieceToCapture.colour) {
      console.info("User is trying to capture a piece with the same colour");
    } else {
      const newBoard = { ...board };
      newBoard[square] = board[selectedSquare];
      newBoard[selectedSquare] = undefined;
      setBoard(newBoard);
      setSelectedSquare(undefined);
    }
  }

  return (
    <section className="grid grid-cols-8">
      {Object.entries(board).map(([square, piece]) => (
        // TODO: fix square type assertions
        <Square
          square={square as SquareType}
          piece={piece}
          isSelected={selectedSquare === square}
          onSquareClicked={() => handleSquareClicked(square as SquareType)}
          key={square}
        />
      ))}
    </section>
  );
}

export default Board;
