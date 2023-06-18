import Board from "./Board";

function App() {
  return (
    <div className="overflow-y-hidden h-screen scrollbar relative bg-slate-400">
      <header className="w-screen fixed bg-slate-500 text-white h-14">
        test project
      </header>
      <Board />
    </div>
  );
}

export default App;
