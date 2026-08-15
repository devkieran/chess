import { files, ranks } from "../config/board";
import Square from "./Square";

function Board() {
  return (
    <section className="w-lg border">
      {ranks.map((rank) => (
        <div className="flex h-16 w-12" key={rank}>
          {files.map((file) => (
            <Square square={`${file}${rank}`} key={file} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Board;
