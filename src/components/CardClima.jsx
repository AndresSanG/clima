import React from 'react'

const CardClima = ({name,temperatura,clim}) => {
    return (
        <div>
            <h3>nombre: {name}</h3>
            <p>temperatura: {temperatura-273.15}</p>
            <p>clima: {clim}</p>
        </div>
    )
}

export default CardClima
