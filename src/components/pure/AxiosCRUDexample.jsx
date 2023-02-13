import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { login, getAllUsers, getAllPagedUsers, getUserById, createUser, updateUserByID, deleteUserById } from '../../services/axiosCRUDService'

const AxiosCRUDexample = () => {

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                    .email('Formato de email inválido')
                    .required('Email es obligatorio'),
            password: Yup.string().required('Password es obligatorio')
        }
                
    )

    const initialCredentials = {
        email: '',
        password: ''
    }

    const authUser = (values) => {
        login(values.email, values.password)
        .then((response) => {
            if(response.data.token){
                alert(JSON.stringify(response.data.token))
                sessionStorage.setItem('token', response.data.token)
            }else{
                sessionStorage.removeItem('token')
                throw new Error('Login failure')
                
            }
            
        })
        .catch((error) => {
            alert('Ha ocurrido un error ', error)
            sessionStorage.removeItem('token')
        })
        .finally(() => console.log("Login hecho!!"))
    }


    // CRUD EXAMPLES
    const obtainAllUsers = () => {
        getAllUsers()
        .then((response) => {
            if(response.data.data && response.status === 200){
                alert(JSON.stringify(response.data.data))
            }else{
                throw new Error("No se han podido obtener todos los usuarios")
            }
        })
        .catch((error) => alert('Ha ocurrido un error', error))
        .finally(() => console.log('Se ha hecho el allUsers'))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
        .then((response) => {
            if(response.data.data && response.status === 200){
                alert(JSON.stringify(response.data.data))
            }else {
                throw new Error("No existe la página seleccionada", page)
            }
        })
        .catch((error) => alert('Ha ocurrido un error', error))
        .finally(() => console.log('Se ha hecho el allPagedUsers'))
    }

    const obtainUserByID = (id) => {
        getUserById(id)
        .then((response) => {
            if(response.data.data && response.status === 200){
                alert(JSON.stringify(response.data.data))
            }else{
                throw new Error("No se ha encontrado el usuario")
            }
        })
        .catch((error) => alert('Ha ocurrido un error', error))
        .finally(() => console.log("Se ha hecho el userByID"))
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
        .then((response) => {
            if(response.data && response.status === 201){
                alert(JSON.stringify(response.data))
            }else {
                throw new Error('El usuario no se ha creado')
            }
        })
        .catch((error) => {
            alert('Ha ocurrido un error', error)
        })
        .finally(() => {
            console.log("Se ha creado el usuario")
        })
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
        .then((response) => {
            if(response.data && response.status === 200){
                alert(JSON.stringify(response.data))
            }else{
                throw new Error("No se ha podido actualizar el usuario")
            }
        })
        .catch((error) => alert('Ha ocurrido un error', error))
        .finally(() => console.log("Se ha hecho el updateUser"))
    }

    const deleteUser = (id) => {
        deleteUserById(id)
        .then((response) => {
            if(response.status === 204){
                alert(`El usuario con el id: ${id} se ha borrado correctamente`)
            }else{
                throw new Error("No se ha podido borrar el usuario")
            }
        })
        .catch((error) => alert('Ha ocurrido un error', error))
        .finally(() => console.log("Se ha hecho el updateUser"))
    }
    


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
                    authUser(values)
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
            {/* BOTONES DE EJEMPLO PARA TESTEAT LAS RESPUESTA API */}
            <div>
                <button onClick={ obtainAllUsers }>
                    Recoger todos los usuarios con Axios
                </button>
                <button onClick={() => obtainAllPagedUsers(2) }>
                    Recoger todos los usuarios (Página 2) con Axios
                </button>
                <button onClick={() => obtainUserByID(1) }>
                    Recoger un usuario por id (ID 1) con Axios
                </button>
                <button onClick={() => createNewUser("morpheus", "leader") }>
                    Crear un usuario
                </button>
                <button onClick={() => updateUser(1, "morpheus", "developer") }>
                    Actualizar usuario
                </button>
                <button onClick={() => deleteUser(1) }>
                    Borrar usuario
                </button>

            </div>
        </div>
    );
}

export default AxiosCRUDexample;
