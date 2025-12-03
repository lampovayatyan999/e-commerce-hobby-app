import { Moon, User, Menu } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

function NavBar() {
  const [dark, setDark] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const handleEvents = (e) => {
      if (e.key === "Escape") setOpenDropdown(false);

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("keydown", handleEvents);
    document.addEventListener("mousedown", handleEvents);
    
    return () => {
      document.removeEventListener("keydown", handleEvents);
      document.removeEventListener("mousedown", handleEvents
      )
    }
  }, [openDropdown]);

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[80%] bg-blue-600 dark:bg-blue-800 p-4 text-black dark:text-white h-[75px] flex items-center rounded-xl mt-4 transition-colors">
        <nav className="flex justify-between w-full items-center">
          {/* КНОПКА МЕНЮ */}
          <Menu
            className="w-[30px] h-[30px] cursor-pointer"
            onClick={() => setOpenDropdown(!openDropdown)}
          />

          <h1 className="font-bold text-lg">Hobby.ru</h1>

          <div className="bg-white dark:bg-gray-700 w-[400px] rounded-3xl h-[40px] mt-2 border border-black dark:border-gray-500 transition-colors">
            <input
              type="text"
              placeholder="Поиск..."
              className="w-full bg-transparent text-black dark:text-white font-semibold rounded-3xl h-full px-3 outline-none"
            />
          </div>

          <div className="flex justify-between gap-4 w-[80px] h-[40px] items-center">
            <User className="w-[25px] h-[25px] cursor-pointer" />

            <button
              onClick={() => setDark(!dark)}
              className="transition-transform hover:scale-110 p-1 bg-white dark:bg-gray-700 rounded-lg"
            >
              <Moon className="w-[25px] h-[25px] dark:text-white" />
            </button>
          </div>
        </nav>
      </div>

      {/* DROPDOWN */}
      <div
        ref={dropdownRef}
        className={`fixed left-1/2 -translate-x-1/2 w-[80%] bg-white dark:bg-gray-800 rounded-xl shadow-xl mt-24 p-6 z-40 transition-all duration-300
        ${openDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
      `}
      >
        <h2 className="text-xl font-bold mb-4 dark:text-white">Категории</h2>

        <div className="grid grid-cols-2 gap-4 dark:text-white">
          <div className="cursor-pointer hover:underline">Книги</div>
          <div className="cursor-pointer hover:underline">Манга</div>
          <div className="cursor-pointer hover:underline">Игрушки</div>
          <div className="cursor-pointer hover:underline">Хобби</div>
          <div className="cursor-pointer hover:underline">Подарки</div>
          <div className="cursor-pointer hover:underline">Разное</div>
        </div>

        <h2 className="text-xl font-bold mt-6 mb-4 dark:text-white">Корзина</h2>
        <p className="text-gray-500 dark:text-gray-300">Тут будут товары...</p>
      </div>
    </>
  );
}

export default NavBar;
