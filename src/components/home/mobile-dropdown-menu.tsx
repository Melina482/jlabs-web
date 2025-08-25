import { protectedRoutes } from "@/config/routes";
import { useState } from "react";
import { Link } from "react-router";

type MobileDropdownMenuProps = {
  isHomeActive: boolean;
  isProfileActive: boolean;
  handleLogout: () => void;
};

const MobileDropdownMenu: React.FC<MobileDropdownMenuProps> = ({
  isHomeActive,
  isProfileActive,
  handleLogout
}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    <div className="block sm:hidden">
      <button
        onClick={toggleMenu}
        className="text-white text-2xl focus:outline-none cursor-pointer hover:opacity-60 duration-300"
      >
        ☰
      </button>
    </div>

    {/* Mobile dropdown menu */}
    {menuOpen && (
      <div className="sm:hidden flex flex-col fixed top-18 right-6 mt-2 w-40 bg-[#1c182c] border border-gray-600 rounded-md shadow-md z-50 ">
        <Link to={protectedRoutes.ROOT}
          onClick={() => setMenuOpen(false)}
          className={`px-4 py-2 text-sm hover:bg-[#282038] rounded-t-md ${
            isHomeActive ? "bg-[#282038]" : "duration-300" }`}
        >
          Home
        </Link>
        <Link to={protectedRoutes.PROFILE}
          onClick={() => setMenuOpen(false)}
          className={`px-4 py-2 text-sm hover:bg-[#282038] ${
            isProfileActive ? "bg-[#282038]" : "duration-300"}`}
        >
          Profile
        </Link>
        <button
          onClick={() => {
            setMenuOpen(false);
            handleLogout();
          }}
          className="px-4 py-2 text-sm text-left hover:bg-[#282038] rounded-b-md text-white cursor-pointer duration-300"
        >
          Logout
        </button>
      </div>
    )}
    </>
  )
} 

export default MobileDropdownMenu;