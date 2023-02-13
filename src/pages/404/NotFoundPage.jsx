import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate()
    
    const goHome = (path) => {
        navigate(path)
    }


    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={() => goHome("/")}>Ir a Home</button>
        </div>
        
    );
}

export default NotFoundPage;
