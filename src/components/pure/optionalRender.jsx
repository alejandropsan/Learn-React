import React, {useState} from 'react';


let red = 0;
let green = 200;
let blue = 150;

// ? Estilo para usuario loggeado
const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

// ? Estilo para usuario no loggeado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}


// Login Logout buttons
const LoginButton = ({loginAction,propStyle}) => {
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);





    // const updateAccess = () => {
    //     setAccess(!access)
    // }

    // Login / Logout buttons
    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let opcionalButton;

    // if (access) {
    //     opcionalButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     opcionalButton = <button onClick={updateAccess}>Login</button>
    // }


    if (access) {
        opcionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    }else{
        opcionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }


    // Mensajes sin leer
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }


    return (
        <div>
            {/* Botón opcional */}
            { opcionalButton }
            {/* Nmensajes sin leer */}
            {/* { nMessages > 0 && nMessages === 1 && <p>Tú tienes {nMessages} sin leer... </p> }
            { nMessages > 1 && <p>Tú tienes {nMessages} sin leer... </p> }
            { nMessages === 0 && <p>No hay mensajes sin leer</p> } */}
            {/* Operador ternario */}
            {access ? (
                <div>
                    { nMessages > 0 ?
                    <p>Tú tienes {nMessages} nuevo{nMessages > 1 ? 's' : null} mensaje{nMessages > 1 ? 's' : null} sin leer... </p>
                    :
                    <p>No hay mensajes sin leer</p> }
                    <button onClick={addMessages}>{nMessages === 0 ? 'Añade tu primer mensaje' : 'Añade un nuevo mensaje' }  </button>
                </div>) : null}
            

            
        </div>
    );
}

export default OptionalRender;
