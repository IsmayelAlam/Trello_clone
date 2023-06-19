import Tasks from "../tasks/Tasks";

export default function TaskCard({ num }) {
  const array = [...Array(num).keys()];

  return (
    <ul className="max-h-[90%] overflow-y-scroll scrollbar scroll-smooth ">
      {array.map((num) => (
        <Tasks num={num} />
      ))}
    </ul>
  );
}
