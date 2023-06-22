import SideBarLeft from "./components/layout/SideBarLeft";
import ProjectHeading from "./components/utils/ProjectHeading";
import Board from "./components/layout/Boards";

function App() {
  return (
    <div className="overflow-y-hidden h-screen scrollbar relative bg-slate-500 bg-cover bg-center text-gray-300">
      <ProjectHeading />
      <SideBarLeft />
      <Board />
    </div>
  );
}

export default App;
