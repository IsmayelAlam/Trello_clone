export default function CardLabel({ label, id, styleClass }) {
  return (
    <ul className="flex items-center gap-1 flex-wrap w-full">
      {label.map((la) => (
        <li
          key={la.title}
          className={`w-max px-3 rounded-full capitalize font-semibold text-white text-xs ${styleClass}`}
          style={{ backgroundColor: la.color }}
        >
          {la.title}
        </li>
      ))}
    </ul>
  );
}
