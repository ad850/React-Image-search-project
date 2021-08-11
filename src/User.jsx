import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const User = () => {

    const { fname, lname } = useParams();

    const location = useLocation();

    const back = useHistory();

    console.log(back);

    return (<>


        <h1>user page {fname} {lname} </h1>

        <p>my location is {location.pathname}</p><br />

        {location.pathname === '/User/aditya/sharma' ? (<button onClick={() => back.goBack()}>Click!</button>) : null}


    </>)
}

export default User;