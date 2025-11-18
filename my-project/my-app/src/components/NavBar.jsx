import { Moon, User, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";

function NavBar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[80%] justify-center bg-blue-600 dark:bg-blue-800 p-4 text-black dark:text-white h-[75px] flex items-center rounded-xl mt-4 mb-4 mx-auto transition-colors">
      <nav className="flex justify-between w-full items-center">
        <Menu className="w-[30px] h-[30px] cursor-pointer" />
        <h1 className="font-bold text-lg">Hobby.ru</h1>

        <div className="bg-white dark:bg-gray-700 w-[400px] rounded-3xl h-[40px] mt-2 border border-black dark:border-gray-500 transition-colors">
          <input
            type="text"
            placeholder="Поиск..."
            className="w-full bg-transparent text-black dark:text-white font-semibold rounded-3xl h-full px-3 outline-none"
          />
        </div>

        <div className="flex justify-between gap-4 w-[80px] h-[40px] cursor-pointer items-center">
          <User className="w-[30px] h-[30px]" />
          <button
            onClick={() => setDark(!dark)}
            className="transition-transform hover:scale-110 p-1 bg-white dark:bg-gray-700 rounded-lg"
            title={dark ? "Светлая тема" : "Тёмная тема"}
          >
            <Moon className="w-[25px] h-[25px] dark:text-yellow-300" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
