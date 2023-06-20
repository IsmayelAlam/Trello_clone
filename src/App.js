import SideBarLeft from "./components/layout/SideBarLeft";
import ProjectHeading from "./components/utils/ProjectHeading";
import Board from "./components/layout/Boards";
// import TaskModal from "./components/tasks/TaskModal";

// const bg = "bg-[url('./assets/photo-1687027053771-76a0460d1c68.avif')]";

function App() {
  return (
    <div className="overflow-y-hidden h-screen scrollbar relative bg-slate-500 bg-cover bg-center text-gray-300">
      <ProjectHeading />
      <SideBarLeft />
      <Board />
      {/* <TaskModal /> */}
    </div>
  );
}

export default App;
