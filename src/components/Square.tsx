import {
  ChessBishop,
  ChessKing,
  ChessKnight,
  ChessQueen,
  ChessRook,
} from "lucide-react";

const colours = {
  light: "bg-olive-200",
  dark: "bg-amber-800",
};

type Props = {
  row: number;
  col: number;
};

function Square({ row, col }: Props) {
  function getColour() {
    if (row % 2 === 0) {
      return col % 2 === 0 ? colours.light : colours.dark;
    }

    return col % 2 === 0 ? colours.dark : colours.light;
  }

  function getPiece() {
    if (row !== 0 && row !== 7) return null;

    // Rooks
    if (col === 0 || col === 7) return <ChessRook />;
    // Knights
    if (col === 1 || col === 6) return <ChessKnight />;
    // Bishops
    if (col === 2 || col === 5) return <ChessBishop />;
    // Queens
    if (col === 3) return <ChessQueen />;
    // Kings
    if (col === 4) return <ChessKing />;
  }

  return <div className={`grow ${getColour()}`}>{getPiece()}</div>;
}

export default Square;
