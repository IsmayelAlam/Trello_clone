import Board from "./Board";

function App() {
  return (
    <div className="overflow-y-hidden h-screen scrollbar relative">
      <header className="w-screen fixed bg-slate-500 text-white h-14">
        test project
      </header>
      <Board />
      <button className="p-1 m-1 block hover:bg-slate-300 text-start rounded">
        + add new
      </button>
    </div>
  );
}

export default App;
