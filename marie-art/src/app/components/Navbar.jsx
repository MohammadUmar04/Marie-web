'use client';
import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiEdit, FiLogIn, FiMoreVertical } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" passHref>
            <span className="text-blue-500 text-2xl font-bold cursor-pointer">A</span>
          </Link>
          <Link href="/explore"><span className="hover:text-gray-300 cursor-pointer">Explore</span></Link>
          <Link href="/learn"><span className="hover:text-gray-300 cursor-pointer">Learn</span></Link>
          <Link href="/shop"><span className="hover:text-gray-300 cursor-pointer">Shop</span></Link>
          <Link href="/jobs"><span className="hover:text-gray-300 cursor-pointer">Jobs</span></Link>
        </div>

        {/* Search bar */}
        <div className="flex items-center bg-gray-800 text-gray-400 rounded-full px-4 py-2 w-1/3">
          <FiSearch />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent focus:outline-none ml-2 w-full"
          />
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-4">
          <FiShoppingCart className="hover:text-gray-300" size={20} />
          <button className="flex items-center space-x-1 bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600">
            <FiEdit />
            <Link href={'/Signup'}>
            <span>Sign up</span>
            </Link>
          </button>
          <button className="flex items-center space-x-1 bg-blue-600 px-3 py-1 rounded-full hover:bg-blue-500">
            <FiLogIn />
            <Link href={'/Login'}>
            <span>Sign In</span>
            </Link>
          </button>
          <FiMoreVertical className="hover:text-gray-300" size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
