import type { Piece, Square } from "../types/board";

export const files = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;
export const ranks = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export const board: Record<Square, Piece | undefined> = {
  // Rank 1
  a1: { type: "rook", colour: "white" },
  b1: { type: "knight", colour: "white" },
  c1: { type: "bishop", colour: "white" },
  d1: { type: "queen", colour: "white" },
  e1: { type: "king", colour: "white" },
  f1: { type: "bishop", colour: "white" },
  g1: { type: "knight", colour: "white" },
  h1: { type: "rook", colour: "white" },

  // Rank 2
  a2: { type: "pawn", colour: "white" },
  b2: { type: "pawn", colour: "white" },
  c2: { type: "pawn", colour: "white" },
  d2: { type: "pawn", colour: "white" },
  e2: { type: "pawn", colour: "white" },
  f2: { type: "pawn", colour: "white" },
  g2: { type: "pawn", colour: "white" },
  h2: { type: "pawn", colour: "white" },

  // Rank 3
  a3: undefined,
  b3: undefined,
  c3: undefined,
  d3: undefined,
  e3: undefined,
  f3: undefined,
  g3: undefined,
  h3: undefined,

  // Rank 4
  a4: undefined,
  b4: undefined,
  c4: undefined,
  d4: undefined,
  e4: undefined,
  f4: undefined,
  g4: undefined,
  h4: undefined,

  // Rank 5
  a5: undefined,
  b5: undefined,
  c5: undefined,
  d5: undefined,
  e5: undefined,
  f5: undefined,
  g5: undefined,
  h5: undefined,

  // Rank 6
  a6: undefined,
  b6: undefined,
  c6: undefined,
  d6: undefined,
  e6: undefined,
  f6: undefined,
  g6: undefined,
  h6: undefined,

  // Rank 7
  a7: { type: "pawn", colour: "black" },
  b7: { type: "pawn", colour: "black" },
  c7: { type: "pawn", colour: "black" },
  d7: { type: "pawn", colour: "black" },
  e7: { type: "pawn", colour: "black" },
  f7: { type: "pawn", colour: "black" },
  g7: { type: "pawn", colour: "black" },
  h7: { type: "pawn", colour: "black" },

  // Rank 8
  a8: { type: "rook", colour: "black" },
  b8: { type: "knight", colour: "black" },
  c8: { type: "bishop", colour: "black" },
  d8: { type: "queen", colour: "black" },
  e8: { type: "king", colour: "black" },
  f8: { type: "bishop", colour: "black" },
  g8: { type: "knight", colour: "black" },
  h8: { type: "rook", colour: "black" },
};
