import { TackList } from "./TaskList";

export default function Board() {
  return (
    <div className="w-fit h-screen bg-slate-700 flex items-start overflow-x-scroll mt-14">
      <div className="my-5 mx-2 bg-white rounded-lg shadow-md w-72 max-h-[90%] overflow-hidden flex flex-col">
        <h2 className="text-lg p-2 capitalize pl-5 bg-slate-200">test</h2>

        <TackList num={5} />

        <button className="p-1 m-1 block hover:bg-slate-300 text-start rounded">
          + add new
        </button>
      </div>

      <div className="my-5 mx-2 bg-white rounded-lg shadow-md w-72 max-h-[90%] overflow-hidden flex flex-col">
        <h2 className="text-lg p-2 capitalize pl-5 bg-slate-200">test</h2>

        <TackList num={10} />

        <button className="p-1 m-1 block hover:bg-slate-300 text-start rounded">
          + add new
        </button>
      </div>

      <div className="my-5 mx-2 bg-white rounded-lg shadow-md w-72 max-h-[90%] overflow-hidden flex flex-col">
        <h2 className="text-lg p-2 capitalize pl-5 bg-slate-200">test</h2>

        <TackList num={25} />

        <button className="p-1 m-1 block hover:bg-slate-300 text-start rounded">
          + add new
        </button>
      </div>

      <div className="my-5 mx-2 bg-white rounded-lg shadow-md w-72 max-h-[90%] overflow-hidden flex flex-col">
        <h2 className="text-lg p-2 capitalize pl-5 bg-slate-200">test</h2>

        <TackList num={50} />

        <button className="p-1 m-1 block hover:bg-slate-300 text-start rounded">
          + add new
        </button>
      </div>

      <div className="my-5 mx-2 bg-white rounded-lg shadow-md w-72 max-h-[90%] overflow-hidden flex flex-col">
        <h2 className="text-lg p-2 capitalize pl-5 bg-slate-200">test</h2>

        <TackList num={10} />

        <button className="p-1 m-1 block hover:bg-slate-300 text-start rounded">
          + add new
        </button>
      </div>

      <div className="my-5 mx-2 bg-white rounded-lg shadow-md w-72 max-h-[90%] overflow-hidden flex flex-col">
        <h2 className="text-lg p-2 capitalize pl-5 bg-slate-200">test</h2>

        <TackList num={30} />

        <button className="p-1 m-1 block hover:bg-slate-300 text-start rounded">
          + add new
        </button>
      </div>

      <button className="px-2 py-2 my-5 mx-2 w-72 text-start rounded hover:bg-slate-300">
        + add new
      </button>
    </div>
  );
}
