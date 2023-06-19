export default function TaskCard({ num }) {
  const array = [...Array(num).keys()];
  const str =
    "card Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore unde ab iste minium top";

  return (
    <ul className={`max-h-[90%] overflow-y-scroll scrollbar scroll-smooth`}>
      {array.map((num) => (
        <li
          className="px-2 py-1 m-2 max-h-20  bg-slate-200 rounded capitalize font-semibold shadow cursor-pointer"
          draggable
        >
          {str.length > 90 ? str.slice(0, 86).padEnd(90, ".") : str}
        </li>
      ))}
    </ul>
  );
}
