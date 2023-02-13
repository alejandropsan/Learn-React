import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import StatePage from './StatePage';

const HomePage = ({user}) => {

    const location = useLocation()
    const history = useNavigate()

    //console.log("Estamos en la ruta; ", location.pathname)

    const [params, setParams] = useSearchParams()

    

    const navigate = (path) => {
        history(path)
    }

    //  const navigateProps = () => {
    //      history('online-state',
    //          {
    //              state: 
    //              {
    //                  online: true
    //              }
    //          }
    //      )
    //  }

     const addParam = () => {
         setParams({
             name: "Sandra",
             term: "VALOR",
             online: true
         })
       
     }


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate("/profile")}>
                Ir al perfil
            </button>
            {/* <button onClick={() => navigate("online-state")}>
                Ir a StatePage
            </button> */}
            {/* <button onClick={() => navigateProps("online-state")}>
                Ir a la página con estado
            </button> */}
            
            {/* <button onClick={() => addParam()}>
                Enviar /  Query Params
            </button> */}
           {/* <StatePage></StatePage> */}
           
            
        </div>
    );
}

export default HomePage;
