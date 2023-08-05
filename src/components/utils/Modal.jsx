import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

export default function Modal({ setUser, setUsernameChange }) {
  const [username, setUsername] = useState("");

  return (
    <div className="w-screen h-screen absolute inset-0 backdrop-blur-sm overflow-hidden flex items-center justify-center">
      <div className="w-96 p-5 bg-white flex flex-col items-center justify-center rounded-lg shadow-lg">
        <button
          className="w-full text-end block"
          onClick={() => setUsernameChange(true)}
        >
          <MdOutlineCancel className="w-5 h-5 text-end inline-block" />
        </button>
        <h2 className="mb-4">Add a username</h2>
        <input
          type="text"
          required
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(e);
          }}
          className="h-10 bg-slate-200 rounded-lg border-2 border-red-300 valid:border-green-300 outline-none"
          value={username}
          autoFocus
        />
        <button
          className="bg-orange-400 my-5 py-2 px-10 rounded-full uppercase font-semibold text-white shadow active:bg-orange-500"
          onClick={() => {
            if (!username) return;
            setUsernameChange(true);
            setUser(username);
          }}
        >
          add
        </button>
      </div>
    </div>
  );
}
