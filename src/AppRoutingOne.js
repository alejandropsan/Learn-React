import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';


function AppRoutingOne() {

  let logged = true

  

  useEffect(() => {
    logged = localStorage.getItem('credentials')
    console.log("User login: ", logged)
  },[]);
  

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQs |</Link>
          <Link to="/task/1">| Task 1 |</Link>
          <Link to="/task/2">| Task 2 |</Link>
          <Link to="/una404">| Ruta inexistente |</Link>
          <Link to="/login">| Login ||</Link>
        </aside>
      </div>

      <main>
        <Routes>
          <Route path='/' element={ logged ? <HomePage /> : <LoginPage /> } />
          <Route path='online-state' element={ <StatePage /> } />
          <Route path='login' element={ logged ?  <HomePage /> : <LoginPage /> } />
          <Route path='about' element={ <AboutPage /> } />
          <Route path='faqs' element={ <AboutPage /> } />
          <Route path='profile' element={ logged ? <ProfilePage /> : <LoginPage /> } />
          <Route path="login" element={ logged ? <HomePage /> : <LoginPage /> } /> 
          
          <Route path='tasks' element={ <TasksPage /> } />
          <Route path='task/:id' element={ <TaskDetailPage /> } />
          {/* 404 - Page No Found */}
          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>

      </main>


      
    </Router>
  );
}

export const taskList = [

  {
    id: 1,
    name: 'Task 1',
    description: 'Mi primera tarea'
  },
  {
    id: 2,
    name: 'Task 2',
    description: 'Mi segunda tarea'
  },
  {
    id: 3,
    name: 'Task 3',
    description: 'Mi tercera tarea'
  },
]

export default AppRoutingOne;
