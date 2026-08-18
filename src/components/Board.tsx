import { useState } from "react";
import { files, board as startingBoard } from "../config/board";
import type { Square as SquareType } from "../types/board";
import { getSquareCoords } from "../utils/board";
import Square from "./Square";

function Board() {
  const [board, setBoard] = useState(startingBoard);
  const [selectedSquare, setSelectedSquare] = useState<SquareType>();

  // TODO: this function is very very messy - needs a big tidy up once foundation logic exists
  function handleSquareClicked(square: SquareType) {
    if (!selectedSquare) {
      if (board[square]) {
        setSelectedSquare(square);
      } else {
        console.info("Square doesn't have any piece to select");
      }

      return;
    }

    if (selectedSquare === square) {
      setSelectedSquare(undefined);
      return;
    }

    const selectedPiece = board[selectedSquare]!; // assert as if a square has been selected then it must have had a piece
    const { file: selectedSquareFile, rank: selectedSquareRank } =
      getSquareCoords(selectedSquare);
    const selectedSquareFileIndex = files.indexOf(selectedSquareFile);
    // const selectedSquareRankIndex = ranks.indexOf(selectedSquareRank);

    const pieceToCapture = board[square];
    const { file: squareFile, rank: squareRank } = getSquareCoords(square);
    const squareFileIndex = files.indexOf(squareFile);
    // const squareRankIndex = ranks.indexOf(selectedSquareRank);

    if (pieceToCapture && selectedPiece.colour === pieceToCapture.colour) {
      setSelectedSquare(square);
      return;
    }

    if (selectedPiece.type === "pawn") {
      const fileDifference = Math.abs(
        selectedSquareFileIndex - squareFileIndex,
      );

      console.log(fileDifference, selectedSquareFileIndex, squareFileIndex);

      if (pieceToCapture && fileDifference !== 1) {
        console.info("Pawns can only capture diagonally");
        return;
      }

      if (!pieceToCapture && selectedSquareFile !== squareFile) {
        console.info("Pawns can only move vertically");
        return;
      }

      if (
        (selectedPiece.colour === "white" &&
          squareRank - selectedSquareRank !== 1) ||
        (selectedPiece.colour === "black" &&
          selectedSquareRank - squareRank !== 1)
      ) {
        console.info("Pawns can only move one square at a time");
        return;
      }
    } else {
      console.info("Piece movement not programmed");
      return;
    }

    if (!pieceToCapture) {
      const newBoard = { ...board };
      newBoard[square] = selectedPiece;
      newBoard[selectedSquare] = undefined;
      setBoard(newBoard);
      setSelectedSquare(undefined);

      return;
    }

    const newBoard = { ...board };
    newBoard[square] = board[selectedSquare];
    newBoard[selectedSquare] = undefined;
    setBoard(newBoard);
    setSelectedSquare(undefined);
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
