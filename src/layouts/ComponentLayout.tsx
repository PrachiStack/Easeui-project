import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu } from "lucide-react";

type Props = {};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const components = [
    "Button",
    "Card",
    "Modal",
    "Input",
    "Navbar",
    "Carousel",
    "Tooltip",
    "Layer",
  ];

  return (
    <div className="flex min-h-screen text-gray-900 dark:text-gray-100 bg-gray-50/50 dark:bg-gray-950 transition-colors duration-200">
      <aside
        className={`
          w-64 p-6 flex flex-col bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-800
          fixed md:static top-0 left-0 h-full z-20
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0
        `}
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
          Components
        </h2>
        <ul className="flex flex-col gap-1">
          {components.map((item) => {
            const isActive = location.pathname === `/components/${item.toLowerCase()}`;
            return (
              <li
                onClick={() => {
                  navigate(item.toLowerCase());
                  setSidebarOpen(false);
                }}
                key={item}
                className={`cursor-pointer px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="flex-1 overflow-auto h-screen p-6 md:p-10">
        <button
          className="md:hidden mb-4 text-gray-700 dark:text-gray-300 p-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-gray-900"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle navigation menu"
        >
          <Menu size={20} />
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default ComponentLayout;
