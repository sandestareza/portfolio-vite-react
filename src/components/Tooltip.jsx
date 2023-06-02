import React from "react";

export const Tooltip = ({tooltipMessage, children}) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute bottom-0 flex-col items-center hidden group-hover:flex  mb-6 ">
        <span className="relative z-10 p-2 text-xs -left-[3.9rem] top-[1.35rem] w-16 text-center leading-none dark:text-white whitespace-no-wrap dark:bg-green-600 shadow-lg rounded">{tooltipMessage}</span>
        <div className="relative p-2 text-xs -left-9 top-2 rotate-45 w-2 h-2 -mt-2 dark:bg-green-600"></div>
      </div>
    </div>
  );
};