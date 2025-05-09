import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center pt-18 ">
      <div className="w-full max-w-4xl flex flex-col">
        <header className="w-full border-b border-gray-700 mt-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">a</h1>
            <h1 className="text-2xl font-semibold">arón</h1>
          </div>

          <nav className="flex justify-center">
            <ul className="flex gap-4" >
                <li>blog</li>
                <li>proyectos</li>
            </ul>
          </nav>

        </header>

        <main className="py-8 flex-grow">
          <Outlet />
        </main>

        <footer className="border-t border-gray-700 py-6 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
