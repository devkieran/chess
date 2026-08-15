import type { Piece, Square as SquareType } from "../types/board";
import { cn } from "../utils";
import { getSquareColour, pieceIcons } from "../utils/board";

type Props = {
  square: SquareType;
  piece?: Piece;
  onPieceMoved: (
    startingSquare: SquareType,
    destinationSquare: SquareType,
  ) => void;
};

function Square({ square, piece, onPieceMoved }: Props) {
  const PieceIcon = piece && pieceIcons[piece.type];

  return (
    <div
      className={cn(
        "flex size-16 grow items-center justify-center",
        getSquareColour(square),
      )}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const startingSquare = e.dataTransfer.getData("square") as SquareType;
        onPieceMoved(startingSquare, square);
      }}
    >
      {PieceIcon && (
        <div
          className="cursor-pointer"
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData("square", square);
          }}
        >
          <PieceIcon
            className={cn(
              "size-12",
              piece.colour === "white" ? "stroke-white" : "stroke-black",
            )}
          />
        </div>
      )}
    </div>
  );
}

export default Square;
