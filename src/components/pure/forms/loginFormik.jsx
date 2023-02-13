import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Formato de email inválido')
                .required('Email es obligatorio'),
        password: Yup.string().required('Password es obligatorio')
    }
            
)



const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

const navigate = useNavigate()    


    return (
        <div>
            <h1>Login Formik</h1>
            <Formik
                // *** Valores iniciales que utiliza el formulaio
                initialValues = { initialCredentials }
                // *** Schema de validación de Yup ***
                validationSchema = {loginSchema}
                // *** Evento onSubmit ***
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000))
                    alert(JSON.stringify(values, null, 2))
                    // *** Guardamos los datos en el localStorage
                    await localStorage.setItem('credentials', values)
                    navigate("profile")
                }}
            >

                {/* Obtenemos props desde Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor='email'>Email</label>
                            <Field id="email" type="email" name="email" placeholder="youremail@example.com" />

                            {/* Errores de email */}
                            {
                                errors.email && touched.email &&
                                (
                                    
                                    <ErrorMessage component="div" name="email"></ErrorMessage>
                                    
                                )
                            }

                            <label htmlFor='password'>Contraseña</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />

                            {/* Errores de password */}
                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage component="div" name="password"></ErrorMessage>
                                )
                                    
                                
                            }

                            <button type='submit'>Login</button> 
                            {isSubmitting ? (<p>Login tus credenciales...</p>) : null}
                        </Form>
                )
                }

                
            </Formik>
        </div>
    );
}

export default LoginFormik;
