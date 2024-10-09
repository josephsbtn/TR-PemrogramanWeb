import React from "react";

function topnav() {
  return (
    <nav className="flex justify-end items-center h-[10%] bg-white w-full px-4 py-2">
      <div className="flex flex-col">
        <h1 className="text-black text-lg">Unknown User</h1>
        <h5 className="text-black text-xs">Status</h5>
      </div>
    </nav>
  );
}

export default topnav;
