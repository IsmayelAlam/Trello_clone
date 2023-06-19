import Button from "./Buttons";
import TaskCard from "./TackCard";

export default function Board() {
  return (
    <div className="w-fit h-screen bg-slate- flex items-start overflow-x-scroll mt-14 ml-8">
      {[...Array(5).keys()].map((list) => (
        <div className="my-5 mx-2 bg-white rounded-lg shadow-md w-72 max-h-[90%] overflow-hidden flex flex-col">
          <h2 className="text-lg p-2 capitalize pl-5">list {list + 1}</h2>

          <TaskCard num={Math.ceil(Math.random() * 20)} />

          <Button type="card" />
        </div>
      ))}

      <Button type="list" />
    </div>
  );
}
