import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const LoginPage = () => {

    const history = useNavigate()

    const register = () => {
        history('/register')
    }

    return (
        <div>
            <h1>Login Page</h1>
            <Button variant='contained' onClick={register}>Registro</Button>
            <LoginFormik></LoginFormik>
        </div>
    );
}

export default LoginPage;
