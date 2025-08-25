import MobileDropdownMenu from "@/components/home/mobile-dropdown-menu";
import GradientText from "@/components/ui/gradient-text";
import { protectedRoutes, unprotectedRoutes } from "@/config/routes";
import { useAuth } from "@/contexts/auth.context";
import { Link, useLocation, useNavigate } from "react-router";

const HomeNavbar: React.FC = () => {

  const location = useLocation()
  const navigate = useNavigate();
  const { clearAuth } = useAuth();
  
  const isHomeActive = location.pathname == protectedRoutes.ROOT;
  const isProfileActive = location.pathname.includes(protectedRoutes.PROFILE);

  const handleLogout = () => {
    clearAuth();
    navigate(
      `${unprotectedRoutes.ROOT + unprotectedRoutes.LOGIN}`, 
      { replace: true }
    );
  }

  return (
    <div className="p-10 w-full flex flex-row items-center justify-between">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={8}
        showBorder={false}
        className="text-2xl"
      >
        JLABS
      </GradientText>
      <div className="hidden sm:flex flex-row gap-12">
        <Link to={protectedRoutes.ROOT}
          className={`rounded-md py-2 px-5 duration-300 transition-colors 
            ${isHomeActive ? "bg-[#1c182c]" : "hover:bg-[#1c182c]"}`}
        >
          Home
        </Link>
        <Link to={protectedRoutes.PROFILE}
          className={`rounded-md py-2 px-5 duration-300 transition-colors 
            ${isProfileActive ? "bg-[#1c182c]" : "hover:bg-[#1c182c] "}`}
        >
          Profile
        </Link>
      </div>
      <button 
        type="button" 
        className="hidden sm:block rounded-md py-2 px-5 bg-[#4079ff] cursor-pointer hover:opacity-70 duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
      <MobileDropdownMenu 
        isHomeActive={isHomeActive}
        isProfileActive={isProfileActive}
        handleLogout={handleLogout}
      />
    </div>
  )
}

export default HomeNavbar;