import React from 'react'

//Router
import { useHistory } from 'react-router'

const CityInformtion = ({name, clima}) => {
    const history = useHistory();
    const handleHistory = () => {
        console.log(history);
    }
    return (
        <div>
            <h2>{name}</h2>
            <p>{clima}</p>
            <button onClick={handleHistory}>See More</button>
        </div>
    )
}

export default CityInformtion
