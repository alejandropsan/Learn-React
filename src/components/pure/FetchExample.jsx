import React, { useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);
    

    useEffect(() => {
        
        return () => {
            obtainUsers()
        };
    }, []);


    const obtainUsers = () => {

        getAllUsers()
            .then((response) => {
                console.log("Todos los usuarios", response.data)
                setUsers(response.data)
                setTotalUsers(response.total)
                setUsersPerPage(response.per_page)
                setPages(response.total_pages)
            })
            .catch((error) => {
                alert("Ha habido un problema", error)
            })
            .finally(() => {
                console.log("Finalizada la obtención de usuarios")
                console.table(users)
            })

    }


    const obtainPagedUsers = (page) => {

        getAllPagedUsers(page)
            .then((response) => {
            console.log("Todas las páginas de usuarios", response.total_pages)
            setUsers(response.data)
            setTotalUsers(response.total)
            setUsersPerPage(response.per_page)
            setPages(response.total_pages)
        })
        .catch((error) => {
            alert("Ha habido un problema", error)
        })
        .finally(() => {
            console.log("Finalizada la obtención de usuarios")
            console.table(users)
        })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
        .then((response) => {
            console.log("Usuario específico", response.data)
            setSelectedUser(response.data)
        })
        .catch((error) => {
            alert("Ha habido un problema", error)
        })
        .finally(() => {
            console.log("Finalizada la obtención de usuario específico")
            console.table(selectedUser)
        })
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
        .then((response) => {
            console.log("TOKEN", response.token)
            sessionStorage.setItem('token', response.token)
        })
        .catch((error) => {
            alert("Ha habido un problema", error)
        })
        .finally(() => {
            console.log("Finalizada la obtención de login de usuario")
        })
    }

    return (
        <div>
        {/* SIMULACIÓN DEL BOTÓN DE LOGIN */}
        <button onClick={authUser}>Autenticar Usuario</button>

            <h2>
                Usuarios:
            </h2>
            { users.map((user, index) => 
                (<p key={index} onClick={() => obtainUserDetails(user.id)}>
                    { user.first_name }
                       _
                    { user.last_name }
                </p>)
                )
            }
            <p>Mostrando {usersPerPage} users por {totalUsers} en total</p>
            <button onClick={() => obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>
            <div>
                { selectedUser != null ?
                (
                    <div>
                        <h3>
                            Detalles del usuario seleccionado
                        </h3>
                        <p>Nombre: {selectedUser.first_name}</p>
                        <p>Apellido: {selectedUser.last_name}</p>
                        <p>Correo electrónico: {selectedUser.email}</p>
                        <img src={selectedUser.avatar} style={{height: '150px', width: '150px'}} alt="Imagen del usuario" />
                        </div>
                ) :
                (
                    <h6>Porfavor haz click en un usuario para ver sus detalles</h6>
                )
               }
            </div>
        </div>
    );
}

export default FetchExample;
