import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-4">
          <Link to={`/`} className="text-black hover:text-gray-400 font-bold">All Products</Link>
          <Link to={`/top`} className="text-black hover:text-gray-400 font-bold">Top Products</Link>
        </div>
        <div className="text-black text-xl font-bold">2100640130044</div>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <hr className="bg-gray-500 mt-2"/>
    </nav>
  );
};

export default Navbar;
