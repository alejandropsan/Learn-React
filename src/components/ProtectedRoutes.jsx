import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = ({children, user, redirectTo = '/'}) => {
    if(!user) {
        return <Navigate to={redirectTo} />
        }
   

       return children ? children : <Outlet/> 
    }


