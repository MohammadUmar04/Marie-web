'use client';
import { FaUserFriends, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';

const SidebarItem = ({ Icon, color = "text-gray-500", text }) => (
  <div className="flex flex-col items-center space-y-2">
    <Icon className={`text-2xl ${color}`} />
    {text && <span className="text-xs text-gray-400">{text}</span>}
  </div>
);

export default function Sidebar() {
  return (
    <div className="bg-gray-900 text-white h-screen w-16 md:w-20 lg:w-24 flex flex-col items-center py-4 space-y-4 sticky top-0">
      {/* Sidebar items */}
      <button className="text-xl">
        <FiArrowLeft className="text-gray-500" />
      </button>

      <img
        src="/path-to-your-profile.jpg"
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />

      <SidebarItem Icon={FaUserFriends} color="text-blue-500" />
      <SidebarItem Icon={FaEnvelope} />
      <hr className="w-8 border-gray-600" />

      <SidebarItem Icon={FaInstagram} />
      <hr className="w-8 border-gray-600" />

      <SidebarItem Icon={FaUserFriends} text="221" />
      <SidebarItem Icon={FaUserFriends} text="8" />

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 py-2 z-50">
        <div className="flex justify-center bg-white rounded-full p-1 mx-auto max-w-xs shadow-lg">
          <a href="#" className="px-6 py-2 rounded-full font-medium bg-black text-white">Portfolio</a>
          <a href="#" className="px-6 py-2 rounded-full text-gray-800 hover:bg-gray-200">About</a>
          <a href="#" className="px-6 py-2 rounded-full text-gray-800 hover:bg-gray-200">Likes</a>
        </div>
      </div>
    </div>
  );
}
