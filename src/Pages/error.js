import React from 'react';
import { Link } from 'react-router-dom'

const Error = () => {
    return (<div>
        <h1>Pagina no encontrada :c</h1>
        <Link to="/">
            <p>Regresar a la pagina principal</p>
        </Link>
    </div>);
}

export default Error;