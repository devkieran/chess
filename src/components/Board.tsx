import Square from "./Square";

function Board() {
  return (
    <section className="w-lg border">
      {Array.from({ length: 8 }, (_, row) => (
        <div className="flex h-16">
          {Array.from({ length: 8 }, (_, col) => (
            <Square row={row} col={col} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Board;
