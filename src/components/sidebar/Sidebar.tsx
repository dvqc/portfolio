import portrait from "@assets/images/portrait.jpg";
import { useStore } from "@nanostores/react";
import { sidebarStatus } from "@stores/sidebarStore";

const Sidebar = ({
  className,
  nav,
  links,
}: {
  className?: string;
  nav: Slottable;
  links: Slottable;
}) => {
  const $sidebarStatus = useStore(sidebarStatus);
  return (
    <>
      <aside
        onTransitionEnd={() => {
          if ($sidebarStatus === "closing") sidebarStatus.set("closed");
        }}
        onBlur={() => sidebarStatus.set("closing")}
        className={`
        ${className} ${
          $sidebarStatus === "closed"
            ? " -translate-x-full"
            : $sidebarStatus === "open"
            ? "flex translate-x-0"
            : " -translate-x-full "
        } 
         fixed md:flex md:translate-x-0 top-0 h-screen  flex-col items-center  overflow-auto p-5 bg-gray-200 dark:bg-gray-900 
        transition-all duration-300 z-50`}
      >
        <img
          className="md:w-56 md:h-56 w-32 h-32 rounded-full m-5 shadow-md"
          src={portrait}
          alt="A portrait image of the website owner"
        />
        <>{nav}</>
        <>{links}</>
      </aside>
      {$sidebarStatus == "open" && (
        <div
          className="duration-300 transition-all inset-0 md:hidden  fixed z-40 backdrop-blur backdrop-filter "
          onClick={() => sidebarStatus.set("closing")}
        />
      )}
    </>
  );
};

export default Sidebar;
