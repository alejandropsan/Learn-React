import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom'

const StatePage = () => {

    const [params] = useSearchParams()

    const name = params.get("name") 



    const location = useLocation()

    // console.log('Location State ',location.state.online) // State
    console.log('Query Param ', name) // Query params Sent


    return (
        <div>
        
            {/* <h1>State: { location.state.online ? 'El usuario está online' : 'El usuario no está online' }</h1> */}
            <h2>Query Param: { name }</h2>
        </div>
    );
}

export default StatePage;
