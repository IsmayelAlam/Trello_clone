export default function TaskModal({ card }) {
  console.log(card);
  return (
    <div className="fixed inset-0 backdrop-blur-sm z-100 flex items-center justify-center">
      <div className="bg-slate-800 rounded-lg shadow-md w-[60%] h-[90%] px-10 py-14 overflow-hidden">
        modal
      </div>
    </div>
  );
}
