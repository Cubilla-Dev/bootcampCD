import React, { useState } from 'react';
import style from './Feliz.module.css'

const FelizCumpleanos = ({ nombre, apellido, edad, color }) => {
    const [edadActual, setEdadActual] = useState(edad);

    const aumentoEdad = () => {
        setEdadActual(edadActual + 1);
    };

    return (
    <div className={style.container} style={{background: `${color}`}}>
        <h1>{nombre}, {apellido}</h1>
        <h4>Age: {edadActual}</h4>
        <h4>Her Color: {color}</h4>
        <button onClick={aumentoEdad}>Birthday Button for {nombre} {apellido}</button>
        </div>
    );
};

export default FelizCumpleanos;
