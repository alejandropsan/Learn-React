import React from 'react';
import { Button } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const history = useNavigate()

    const login = () => {
        history('/login')
    }


    return (
        <div>
            <h1>Register Page</h1>
            <Button variant='contained' onClick={login}>Login</Button>
        </div>
    );
}

export default RegisterPage;
