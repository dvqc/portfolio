import { useEffect, useState } from "react";

const ModeToggler = () => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);
  console.log(isDark);

  return (
    <div className="w-24 h-16 bg-slate-800">
      <input
        type="checkbox"
        name=""
        id=""
        onChange={(e) => {
          if (e.target.checked) setDark(() => true);
          else setDark(() => false);
        }}
      />
    </div>
  );
};

export default ModeToggler;
