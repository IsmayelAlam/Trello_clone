import { TackList } from "./TaskList";

export default function Board() {
  return (
    <div className="w-screen max-h-[screen] bg-slate-700 flex flew">
      <div className="my-5 mx-2 bg-white rounded-lg shadow-md w-72 max-h-[calc(100vh-15%)] overflow-hidden">
        <h2 className="text-lg p-2 capitalize pl-5 bg-slate-200">test</h2>

        <TackList num={50} />

        <button className="p-1 m-1 block hover:bg-slate-300 text-start rounded">
          + add new
        </button>
      </div>
    </div>
  );
}
