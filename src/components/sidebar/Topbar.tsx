import { useRef, useState } from "react";
import { useStore } from "@nanostores/react";
import { sidebarStatus } from "@stores/sidebarStore";

const Topbar = () => {
  const $sidebarStatus = useStore(sidebarStatus);

  console.log($sidebarStatus);
  return (
    <>
      <header
        className={
          "flex w-full  md:-top-full fixed  top-0 left-0 right-0 h-16 bg-white/90 dark:bg-gray-800/90 z-40 " +
          " backdrop-filter backdrop-blur shadow-sm duration-300"
        }
      >
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-gray-800 dark:text-gray-300">
          Ibrahim.B 🔥
        </h1>
        <div className="absolute top-1/2 left-5  -translate-y-1/2">
          <button
            onClick={() => {
              if ($sidebarStatus === "closed") sidebarStatus.set("open");
              else sidebarStatus.set("closing");
            }}
            className="relative w-[40px] h-[40px] rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 48 48"
              className="absolute fill-gray-800 dark:fill-gray-300 top-1/2 left-1/2 
            -translate-x-[10px] -translate-y-[10px] "
            >
              <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Topbar;
