import { Navigate, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, LoginPage, NavBar } from "./index";
import { UserProvider } from "./context/index";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <NavBar />
      <hr />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='about' element={<AboutPage />}/>
        <Route path='login' element={<LoginPage />}/>

        {/* en casos donde el usuario ingrese una ruta no reconocida*/}
        <Route path="/*" element={<Navigate to={"/about"} />}/>
      </Routes>
    </UserProvider>
  )
}
