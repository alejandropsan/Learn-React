import React, {useState, useEffect} from 'react';
import {getRandomUser} from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     obtainUser()
    // }, []);



    const obtainUser = () => {
        getRandomUser()
        .then((response) => {
            if(response.status === 200){
                setUser(response.data.results[0]);
            }
            console.log(response)
        })
        .catch((error) => {
            alert("Ha habido algún error", error)
        })
    }


    return (
        <div>
            <h1>Axios Ejemplo</h1>
            {user !== null ?
            (
                <div>
                    <img alt='avatar' src={ user.picture.large } />
                    <h2>Name: { user.name.title } { user.name.first } { user.name.last }</h2>
                    <h3>{ user.email }</h3>
                    <button onClick={obtainUser}>
                    Usuario aleatorio
                </button>
                </div>
            )
            :
            (
                <div>
                <p>Genera un nuevo usuario</p>
                <button onClick={obtainUser}>
                    Usuario aleatorio
                </button>
                </div>
            )}
        </div>
    );
}

export default AxiosExample;
