import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'


const AboutPage = () => {

    const location = useLocation()
    const history = useNavigate()

    const navigate = (path) => {
        history(path)
    }

    const goBack = () => {
        history(-1)
    }

    const goFoward = () => {
        history(+1)
    }

    return (
        <div>
            <h1>
                About | FAQs Page
            </h1>
            <div>
                <button onClick={() => navigate("/")}>
                    Go to Home
                </button>
                <button onClick={ goBack }>
                    Go Back
                </button>
                <button onClick={ goFoward }>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
