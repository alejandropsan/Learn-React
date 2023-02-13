import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {

    const navigate = useNavigate()
    
    const navigateTo = (path) => {
        navigate(path)
    }

    const goBack = () => {
        navigate(-1)
    }




    return (
        <div>
            <h1>Tu perfil</h1>
            <button onClick={() => navigateTo("/tasks")}>Tus tareas</button>
            <button onClick={goBack}>Ir hacia atrás</button>
        </div>
    );
}

export default ProfilePage;
