import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useState } from 'react';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import RegisterPage from './pages/auth/RegisterPage'

function AppRoutingFinal() {

  const [user, setUser] =  useState(null)

  const login = () => {
    setUser(
      {
        id: 1,
        name: "Mariano"
      }
    )
    console.log(user)
  }

  const logout = () => {
    setUser(null)
    console.log(user)
  }



  return (

    <Router>

<div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/login">| LOGIN |</Link>
          <Link to="/dashboard">| DASHBOARD |</Link>
        </aside>
      </div>

      {
        user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )
      }
      


      <Routes>
        <Route index element={ <HomePage /> } />
        <Route path='/' element={ <HomePage user={user} /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        {/* RUTA DE LOGIN */}
        <Route element={<ProtectedRoutes user={user}/>} >
          <Route path="/login" element={ <LoginPage /> } />
          <Route path='/dashboard' element={ <DashBoard/> } />
        </Route>
        {/* RUTAS PROTEGIDAS */}

      </Routes>
    </Router>  
  );


}


export default AppRoutingFinal;

/*
REDIRECCIONES
<Route path=’/’ element={<Navigate to=»/tweets»/>
*/

