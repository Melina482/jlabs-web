import { HashRouter, Route, Routes } from "react-router"
import AuthLayout from "./components/layout/auth/auth-layout"
import HomeLayout from "./components/layout/home/home-layout"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import Profile from "./pages/profile"
import { protectedRoutes, unprotectedRoutes } from "./config/routes"

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path={unprotectedRoutes.ROOT} element={<AuthLayout />}>
          <Route path={unprotectedRoutes.LOGIN} element={<Login />} />
          <Route path={unprotectedRoutes.REGISTER} element={<Register />} />
        </Route>
        <Route path={protectedRoutes.ROOT} element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path={protectedRoutes.PROFILE} element={<Profile />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
