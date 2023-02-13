import axios from 'axios'

/**
 * Método de login para ReqRes endpoint
 * @param { string } email 
 * @param { string } password 
 */
export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    // Retorna la response con una promesa
    return axios.post('https://reqres.in/api/login', body)
}


// Obtener todos los usuarios
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

// Obtener todos los usuarios paginados
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// Obtener usuario por id
export const getUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// Crear un usuario
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }

    return axios.post(`https://reqres.in/api/users`, body)
}


// Actualizar usuario
export const updateUserByID = (id, name, job) => {
    let body = {
        name: name,
        job: job
    }

    return axios.put(`https://reqres.in/api/users/${id}`, body)
}


// Eliminar usuario
export const deleteUserById = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}