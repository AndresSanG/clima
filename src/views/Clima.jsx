import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import CardClima from '../components/CardClima'
const Clima = () => {
    const {name} = useParams()
    const [clima, setClima] = useState(null)

    useEffect(() => {
        const handleCityClima = async () =>{
        const API=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ccfc9a4cf60f882d66041de10b03e107`
        const response = await fetch(API)
        const result = await response.json()
        console.log(result);
        setClima(result)}
        handleCityClima()
        console.log(name);
        console.log(clima);
    }, [])

    return (
        <div>
            {clima && <CardClima name={clima?.name} temperatura={clima?.main.temp} clim={clima?.weather[0].main}/>}
        </div>
    )
}

export default Clima
