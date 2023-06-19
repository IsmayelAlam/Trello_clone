export default function TaskCard({ num }) {
  const array = [...Array(num).keys()];

  return (
    <ul className={`max-h-[90%] overflow-y-scroll scrollbar scroll-smooth`}>
      {array.map((num) => (
        <li
          className="px-2 py-1 m-2 bg-slate-200 rounded capitalize shadow cursor-pointer"
          draggable
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          dolorum a assumenda dolores aperiam fuga ipsam debitis aut at. Eum
          blanditiis doloribus minus quisquam sequi, deleniti atque quam
          possimus eligendi.
        </li>
      ))}
    </ul>
  );
}
