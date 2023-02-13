import React, {useState} from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log("Suscripción al observable")
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('Nuevo número: ', newNumber)
                    setNumber(newNumber)
                },
                error(error){
                    alert(`Algo ha ido mal: ${error}`)
                    console.log("Error en el observable")
                },
                complete(){
                    alert(`El observable ha terminado con ${number}`)
                    console.log("Concretado el observable")
                }
            }
        )
    }

    return (
        <div>
            <h2>Número: {number}</h2>
            <button onClick={obtainNewNumbers}>
                Obten los nuevos números
            </button>
        </div>
    );
}

export default ObservableExample;
