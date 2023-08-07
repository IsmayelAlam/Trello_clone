export default function CardLabel({ label, styleClass }) {
  return (
    <ul className="flex items-center gap-1 justify-start flex-wrap max-w-md">
      {label.map((la) => (
        <li
          key={la.title}
          className={`px-3 rounded-full capitalize font-semibold text-white text-xs ${styleClass}`}
          style={{ backgroundColor: la.color }}
        >
          {la.title}
        </li>
      ))}
    </ul>
  );
}
