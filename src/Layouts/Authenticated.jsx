import React from "react";
import Navbar from "../Components/Navigation/Navbar";
import Sidebar from "../Components/Navigation/Sidebar";

export default function Authenticated({ children }) {
  return (
    <main className="flex flex-col min-h-screen dark:bg-gray-800">
      <Navbar />
      <Sidebar />

      <div className="w-full flex-grow pt-10 px-4 sm:px-6 md:px-8 lg:pl-72 dark:bg-gray-800">
        {children}
      </div>
      <footer className="mt-auto w-full max-w-[85rem] py-3 px-4 sm:px-6 md:px-8 lg:pl-72 mx-auto dark:bg-gray-800">
        {/* Grid */}
        <div className="text-center">
          <div>
            <a
              className="flex-none text-lg font-semibold text-black dark:text-white"
              href="#"
              aria-label="Brand">
              Kelola.biz
            </a>
          </div>
          {/* End Col */}
          <div>
            <p className="text-gray-500 text-sm">© Andri Ilham. 2023</p>
          </div>
        </div>
        {/* End Grid */}
      </footer>
    </main>
  );
}
