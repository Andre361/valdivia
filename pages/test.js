import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Page() {
  const handleClick = () =>
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div>
      Ohayo isekai; good morning world.
      <button className="bg-blue-200 text-lg pl-4 ml-2" onClick={handleClick}>
        Click me
      </button>
      <ToastContainer />
    </div>
  );
}
