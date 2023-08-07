export default function CardLabel({ label, id }) {
  return (
    <ul className="flex items-center gap-1 my-5">
      {label.map((la) => (
        <li
          key={la.title}
          className="w-max px-3 rounded-full capitalize font-semibold text-sm"
          style={{ backgroundColor: la.color }}
        >
          {la.title}
        </li>
      ))}
    </ul>
  );
}
