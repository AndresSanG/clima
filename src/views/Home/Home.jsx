import React,{ useState} from 'react'

//COMPOETS
import WheaterForm from "../../components/Home/Form/WheaterForm"
import CityInformation from "../../components/Home/CityInformation/CityInformation"
import Loader from "../../components/Loader"
import NotFound from "../../components/NotFound"


//VIEWS

const Home = () => {
    //STATE
const [cityName, setCityName] = useState("");
const [loader, setLoader]= useState(false);
const [cityInformtion, setCityInformtion]= useState(null);
const [error, setError] = useState(false);

    //FUNCIONES
    const handleCity = ({value}) => {
        setCityName(value)
        console.log(value)
    };

    const handleSearchWeather = async e => {
        e.preventDefault();
        setCityInformtion(null)
        setLoader(true)
        setError(false)
        try {
            const API=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ccfc9a4cf60f882d66041de10b03e107`
            const response = await fetch(API)
            const result = await response.json()
            setCityInformtion(result)
            console.log(result)
            if(result.cod!==200){
                setError(true);

            };
        } catch (error) {
            setError(true);
        }        
        setLoader(false)
    };

    return (
        <div>
            <h2>Home</h2>
            {error && <NotFound/>}
            <WheaterForm 
            handleCity={handleCity}
            handleSearchWeather={handleSearchWeather}/>
            {loader? <Loader/> : null}
            {cityInformtion && cityInformtion.cod===200? <CityInformation name={cityInformtion.name} temp={cityInformtion.main.temp} /> : null}
        </div>
    )
}

export default Home

