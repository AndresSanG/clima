import React from 'react'
import {Link} from "react-router-dom"

//Router


const CityInformtion = ({name, temp}) => {
    
    // const temperatura = temp => ((temp-32)*5/9)
    // temperatura()
    return (
        <div>
            <h2>{name}</h2>
            <p>tempertura {(temp-273.15)} C </p>
            <button ><Link to={`/clima${name}`}>See More</Link></button>
        </div>
    )
}

export default CityInformtion
