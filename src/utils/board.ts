import {
  ChessBishop,
  ChessKing,
  ChessKnight,
  ChessPawn,
  ChessQueen,
  ChessRook,
  type LucideIcon,
} from "lucide-react";
import { cn } from ".";
import type { File, Piece, Rank, Square } from "../types/board";

export function isFileEven(file: File) {
  return ["a", "c", "e", "g"].includes(file);
}

export function isRankEven(rank: Rank) {
  return rank % 2 === 0;
}

export function getSquareCoordinates(square: Square): {
  file: File;
  rank: Rank;
} {
  return {
    file: square[0] as File,
    rank: Number(square[1]) as Rank,
  };
}

export function getSquareColour(square: Square, isSelected: boolean) {
  const { file, rank } = getSquareCoordinates(square);

  const isLight = rank % 2 === 0 ? isFileEven(file) : !isFileEven(file);

  return cn(
    isLight ? "bg-olive-200" : "bg-amber-700",
    isSelected && "ring-4 ring-inset",
    isSelected && (isLight ? "ring-olive-400" : "ring-amber-900"),
  );
}

export const pieceIcons: Record<Piece["type"], LucideIcon> = {
  pawn: ChessPawn,
  knight: ChessKnight,
  bishop: ChessBishop,
  rook: ChessRook,
  queen: ChessQueen,
  king: ChessKing,
};
