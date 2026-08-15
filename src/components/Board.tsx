const darkBgColour = "bg-amber-800";
const lightBgColour = "bg-olive-200";

function Board() {
  const getBgColour = (row: number, col: number) => {
    if (row % 2 === 0) {
      return col % 2 === 0 ? lightBgColour : darkBgColour;
    }

    return col % 2 === 0 ? darkBgColour : lightBgColour;
  };

  return (
    <section className="w-lg border">
      {Array.from({ length: 8 }, (_, row) => (
        <div className="flex h-16">
          {Array.from({ length: 8 }, (_, col) => (
            <div className={`grow ${getBgColour(row, col)}`} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Board;
