import React from "react";
import logo from "../image/blck_clvr.jpeg";
export default function article() {
  return (
    <div className="w-full max-w-max flex flex-col">
      <img
        src={logo}
        className="w-[30%] m-4 rounded-sm shadow-sm shadow-black "
      />
      <div className="w-[95%] border-slate-300 border-[1px] self-center rounded-md p-4">
        <h1 className="font-bold text-[15px]">My Article</h1>
        <p className="text-[10px] text-slate-500 font-bold">6th May 2022</p>
        <br />
        <p className="w-[100%] text-[10px]">
          Some quick example text to build on the card title and make up the
          bulk oh the card's content
        </p>
      </div>
    </div>
  );
}
