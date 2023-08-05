import SideBarLeft from "./components/layout/SideBarLeft";
import ProjectHeading from "./components/utils/ProjectHeading";
import Board from "./components/layout/Boards";

function App() {
  return (
    <div className="overflow-y-hidden h-screen scrollbar bg-cover bg-center text-gray-300 relative">
      <ProjectHeading />
      <SideBarLeft />
      <Board />
    </div>
  );
}

export default App;
