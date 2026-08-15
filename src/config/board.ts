import type { Piece, Square } from "../types/board";

export const files = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;
export const ranks = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export const board: Partial<Record<Square, Piece>> = {
  // White
  a1: { type: "rook", colour: "white" },
  b1: { type: "knight", colour: "white" },
  c1: { type: "bishop", colour: "white" },
  d1: { type: "queen", colour: "white" },
  e1: { type: "king", colour: "white" },
  f1: { type: "bishop", colour: "white" },
  g1: { type: "knight", colour: "white" },
  h1: { type: "rook", colour: "white" },
  a2: { type: "pawn", colour: "white" },
  b2: { type: "pawn", colour: "white" },
  c2: { type: "pawn", colour: "white" },
  d2: { type: "pawn", colour: "white" },
  e2: { type: "pawn", colour: "white" },
  f2: { type: "pawn", colour: "white" },
  g2: { type: "pawn", colour: "white" },
  h2: { type: "pawn", colour: "white" },

  // Black
  a7: { type: "pawn", colour: "black" },
  b7: { type: "pawn", colour: "black" },
  c7: { type: "pawn", colour: "black" },
  d7: { type: "pawn", colour: "black" },
  e7: { type: "pawn", colour: "black" },
  f7: { type: "pawn", colour: "black" },
  g7: { type: "pawn", colour: "black" },
  h7: { type: "pawn", colour: "black" },
  a8: { type: "rook", colour: "black" },
  b8: { type: "knight", colour: "black" },
  c8: { type: "bishop", colour: "black" },
  d8: { type: "queen", colour: "black" },
  e8: { type: "king", colour: "black" },
  f8: { type: "bishop", colour: "black" },
  g8: { type: "knight", colour: "black" },
  h8: { type: "rook", colour: "black" },
};
