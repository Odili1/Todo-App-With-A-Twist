import React from "react";
import Close from "../assets/icon-cross.svg";

const Todo = () => {
  return (
    <li className={`flex items-center group justify-between bg-dark-vdb`}>
      <div
        className={`w-[50px] h-[50px] border
         border-light-vlgb rounded-[50%] outline-none bg-gradient-to-r from-gradient-start to-gradient-end `}
      ></div>
      <p className="flex-1 ml-4">Jog around the park 3x</p>
      <img src={Close} className="invisible group-hover:visible" />
    </li>
  );
};

export default Todo;
