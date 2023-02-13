import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
// MODELS
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    

    let user = new User()

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(

        {
            username: Yup.string()
                .min(6, 'El nombre debe tener un mínimo de 6 caracteres')
                .max(12, 'El nombre debe ser de 12 caracteres máximo')
                .required('El campo nombre es obligatorio'),
            email: Yup.string()
                .email('Formato de email introducido inválido')
                .required('El campo email es obligatorio'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'Debes seleccionar tu rol de registro')
                .required('El campo de rol de registro es obligatorio'),    
            password: Yup.string()
                .min(8, 'Contraseña demasiado corta')
                .required('El campo de contraseña es obligatorio'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'La contraseña debe coincidir'
                    )
                }).required('Se debe confirmar la contraseña')    
                   
        }


    )

    const submit = (values) => {
        console.log('Usuario registrado')
    }



    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                validationSchema = {registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 2000))
                    alert(JSON.stringify(values, null, 2))
                }}
            >
            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor='username'>Nombre de usuario</label>
                            <Field id="username" type="text" name="username" placeholder="Tu nombre de usuario" />
                        
                            {/* Errores de email */}
                            {
                                errors.username && touched.username &&
                                (
                                    
                                    <ErrorMessage component="div" name="username"></ErrorMessage>
                                    
                                )
                            }

                            <label htmlFor='email'>Correo electrónico</label>
                            <Field id="email" type="email" name="email" placeholder="Dirección de correo" />

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

                            <label htmlFor='confirm'>Confirma la Contraseña</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder="Confirm password"
                                type="password"
                            />

                            {/* Errores de confirm password */}
                            {
                                errors.confirm && touched.confirm &&
                                (
                                    <ErrorMessage component="div" name="confirm"></ErrorMessage>
                                )
                            }


                            <button type='submit'>Regístrate</button> 
                            {isSubmitting ? (<p>Registrando tus credenciales...</p>) : null}
                        
                        </Form>
                    )
                    }






            </Formik>
        </div>
    );
}

export default RegisterFormik;
