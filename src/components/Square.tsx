import { board } from "../config/board";
import type { Square as SquareType } from "../types/board";
import { getSquareColour, pieceIcons } from "../utils/board";

type Props = {
  square: SquareType;
};

function Square({ square }: Props) {
  function getPiece() {
    const piece = board[square];
    if (!piece) return null;

    const Icon = pieceIcons[piece.type];

    return (
      <Icon
        className={`size-12 ${piece.colour === "white" ? "fill-white" : "fill-black"}`}
      />
    );
  }

  return (
    <div
      className={`grow flex items-center justify-center ${getSquareColour(square)}`}
    >
      {getPiece()}
    </div>
  );
}

export default Square;
