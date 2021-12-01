import React,{ useState} from 'react'

//COMPOETS
import WheaterForm from "../../components/Home/Form/WheaterForm"
import CityInformtion from "../../components/Home/CityInformation/CityInformtion"
import Loader from "../../components/Loader"
// import NotFound from "../../components/NotFound"


//VIEWS

const Home = () => {
    //STATE
const [cityName, setCityName] = useState("");
const [loder, setLoader]= useState(false);
const [cityInformtion, setCityInformtion]= useState(null);

    //FUNCIONES
    const handleCity = ({value}) => {
        setCityName(value)
        console.log(value)
    };

    const handleSearchWeather = async e => {
        e.preventDefault();
        setCityInformtion(null)
        setLoader(true)
        const API=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ccfc9a4cf60f882d66041de10b03e107`
        const response = await fetch(API)
        const result = await response.json()
        setCityInformtion(result)
        console.log(result)
        setLoader(false)
    };


    return (
        <div>
            <h2>Home</h2>
            <WheaterForm 
            handleCity={handleCity}
            handleSearchWeather={handleSearchWeather}/>
            {loder? <Loader/> : null}
            {cityInformtion ? <CityInformtion name={cityInformtion.name} clima={cityInformtion.weather.main} /> : null}
        </div>
    )
}

export default Home

