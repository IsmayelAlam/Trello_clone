import Button from "./Buttons";
import { TackList } from "./TaskList";

export default function Board() {
  return (
    <div className="w-fit h-screen bg-slate-700 flex items-start overflow-x-scroll mt-14">
      {[...Array(5).keys()].map((list) => (
        <div className="my-5 mx-2 bg-white rounded-lg shadow-md w-72 max-h-[90%] overflow-hidden flex flex-col">
          <h2 className="text-lg p-2 capitalize pl-5 bg-slate-200">
            test {list + 1}
          </h2>

          <TackList num={Math.ceil(Math.random() * 20)} />

          <Button type="card" />
        </div>
      ))}

      <Button type="list" />
    </div>
  );
}
