import type { Piece, Square as SquareType } from "../types/board";
import { cn } from "../utils";
import { getSquareColour, pieceIcons } from "../utils/board";

type Props = {
  square: SquareType;
  piece?: Piece;
  isSelected: boolean;
  onSquareClicked: () => void;
};

function Square({ square, piece, isSelected, onSquareClicked }: Props) {
  const PieceIcon = piece && pieceIcons[piece.type];

  return (
    <div
      className={cn(
        "flex size-16 grow items-center justify-center",
        getSquareColour(square, isSelected),
      )}
      onClick={() => onSquareClicked()}
    >
      {PieceIcon && (
        <PieceIcon
          className={cn(
            "size-12 cursor-pointer",
            piece.colour === "white" ? "stroke-white" : "stroke-black",
          )}
        />
      )}
    </div>
  );
}

export default Square;
