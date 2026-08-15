import type { files, ranks } from "../config/board";

export type File = (typeof files)[number];
export type Rank = (typeof ranks)[number];
export type Square = `${File}${Rank}`;
export type Piece = {
  type: "pawn" | "knight" | "bishop" | "rook" | "queen" | "king";
  colour: "white" | "black";
};
