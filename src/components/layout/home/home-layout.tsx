import { Outlet, useNavigate } from "react-router"
import { useAuth } from "../../../contexts/auth.context";
import { Toaster } from "../../ui/sonner";
import { AnimatedGridPattern } from "../../ui/animated-grid-pattern";
import { cn } from "@/utils/cn";
import HomeNavbar from "./home-navbar";
import { useEffect } from "react";

const HomeLayout: React.FC = () =>{ 

  const { isAuthenticated } = useAuth();

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true })
    }
  }, [isAuthenticated, navigate])

  return (
    <>
    <div className="fixed -z-10 flex h-svh w-full items-center justify-center overflow-hidden rounded-lg p-20">
      <AnimatedGridPattern
        width={60}
        height={60}
        opacity={.10}
        numSquares={10}
        duration={3}
        repeatDelay={1}
        className={cn(
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
    <HomeNavbar />
    <main className='flex flex-row h-[80svh] p-10'>
      <Outlet />
    </main>
    <footer className='flex items-center justify-center'>
      <span className='text-sm text-gray-500'>&copy; 2025 Kenny. All rights reserved.</span>
    </footer>
    <Toaster
      richColors={true}
      position="bottom-right"
      duration={1500}
      closeButton
    />
  </>
  )
}
export default HomeLayout;