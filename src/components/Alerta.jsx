import React from 'react';
import '../index.css';


const Alerta = ({mensaje}) => {
    return (
        <>
            <small className="alerta">{mensaje}</small>
        </>
    )
}

export default Alerta
