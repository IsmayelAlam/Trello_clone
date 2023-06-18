export function TackList({ num }) {
  const array = [...Array(num).keys()];
  return (
    <div className={`max-h-[90%] overflow-y-scroll scrollbar scroll-smooth`}>
      {array.map((num) => (
        <div
          className="px-2 py-1 m-2 max-h-20 text-ellipsis  overflow-hidden bg-slate-200 rounded capitalize font-semibold shadow cursor-pointer"
          draggable
        >
          test {num + 1}
        </div>
      ))}
    </div>
  );
}
