import React from 'react';

const AsyncExample = () => {
     // Sintaxis para funciones asíncronas

     async function generateNumber(){
        return 1 // 
     }

     async function generatePromiseNumber(){
        return Promise.resolve(2)
     }

     function obtainNumber(){
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Algo ha ido mal: ${error}`))
     }

     function obtainPromiseNumber(){
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Algo ha ido mal: ${error}`))
     }

    //  async function saveSessionStorage(key, value){
    //     await sessionStorage.setItem(key, value)
    //  }

     async function saveSessionStorage(key, value){
        sessionStorage.setItem(key, value)
        return Promise.resolve(sessionStorage.getItem(key))
     }

     function showStorage(){
        saveSessionStorage('name', 'Alejandro')
        .then((response) => {
            let value = response
            alert(`Nombre guardado: ${value}`)
        }).catch((error) => {
            alert(`Algo ha ido mal: ${error}`)
        }).finally(() => console.log('ÉXITO: Nombre guardado y recibido correctamente'))
     }


     async function obtainMessage(){

        let promise = new Promise((resolve, reject) => {

            setTimeout(() => resolve('Hola desde la promesa del pasado'), 4000)
        })

        let message = await promise

        await alert(`Mensaje recibido: ${message}`)
     }


     const returnError = async() => {
        await Promise.reject(new Error('Oooops! Ha pasado algo malo'))
     }

     const consumeError = () => {
        returnError()
        .then((response) => alert(`Todo ha ido bien: ${response}`))
        .catch((error) => alert(`Algo ha ido mal: ${error}`))
        .finally(() => console.log("Final ejecutado ahora"))
     }

     const urlNotFound = async() => {

        try {
            let response = await fetch('https://invalidURL.com')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch(error){
            alert(`Algo ha ido mal con la URL: ${error} (CHEKEA LA CONSOLA)`)
        }
     }

     const multiplePromise = async() => {
        let results = await Promise.all(
            [
                fetch('http://reqres.in/api/users'),
                fetch('http://reqres.in/api/users?page=2'),
            ]
        ).catch((error) => alert(`Algo ha ido mal con las URLS: ${error}`))
     }





    return (
        <div>
        <h1>Ejemplo asyncronos</h1>
            <button onClick={obtainNumber}>Número obtenido</button>
            <br/>
            <br/>
            <button onClick={obtainPromiseNumber}>Número promesa obtenido</button>
            <br/>
            <br/>
            <button onClick={showStorage}>Guardar y mostrar el nombre</button>
            <br/>
            <br/>
            <button onClick={obtainMessage}>Manda un mensaje al futuro</button>
            <br/>
            <br/>
            <button onClick={consumeError}>Error en la promesa</button>
            <br/>
            <br/>
            <button onClick={urlNotFound}>Respuesta para URL desconocida</button>
            <br/>
            <br/>
            <button onClick={multiplePromise}>Promesas múltiples</button>
        </div>
    );
}

export default AsyncExample;
