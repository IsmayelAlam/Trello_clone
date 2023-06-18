export function TackList({ num }) {
  const array = [...Array(num).keys()];
  return (
    <div className="max-h-[90%] overflow-y-scroll scrollbar scroll-smooth">
      {array.map((num) => (
        <div className="p-2 m-2 bg-slate-300 rounded shadow" draggable>
          test {num + 1}
        </div>
      ))}
    </div>
  );
}
