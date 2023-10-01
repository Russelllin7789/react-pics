import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <nav className="flex items-center justify-between px-8 py-3 bg-blue-400 text-white">
          <div className="w-[50px] h-[50px]">
            <Link to="/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/482/482898.png?uid=R32136755&ga=GA1.1.167750387.1696165548"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <ul className="flex items-center">
            <li className="mr-4 font-bold text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold text-lg">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
