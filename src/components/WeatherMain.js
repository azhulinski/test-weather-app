import WeatherCard from "./WeatherCard";
import {useDispatch} from "react-redux";
import {useState} from "react";
import axios from "axios";
import {addCity} from "../store/actions/citiesAction";
import {Oval} from "react-loader-spinner";

export default () => {

    const dispatch = useDispatch();
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState({
        loading: false,
        data: null,
        error: false,
    })
    const date = new Date()
    const [showConfirm, setShowConfirm] = useState(false);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather`,
                {
                    params: {
                        q: city,
                        units: 'metric',
                        // appid: process.env.REACT_APP_WEATHER_APPID,
                        appid: 'c35fdaca7bd38724a5bda44c16418356',
                    }
                })
            setWeather({data: response.data, loading: false, error: false})
            setCity('')
        } catch (err) {
            setWeather({...weather, data: null, error: true})
            setCity('')
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetchData();
    }

    const handleAddCity = () => {
        dispatch(addCity(weather))
        setShowConfirm(true)
        setTimeout(() => {
            setShowConfirm(false)
        }, 2000)
    }

    return <div className="weather-app">
        <h1 className="app-name">Weather Forecast</h1>
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={'city name'}
                    value={city}
                    onChange={e => setCity(e.target.value)}/>
                <button type="submit">Show Forecast</button>
            </form>
        </div>
        {weather.loading && (
            <>
                <br/>
                <br/>
                <Oval type="Oval" color="black" height={100} width={100}/>
            </>
        )}
        {weather.error && (
            <>
                <br/>
                <span className="error-message">
                    city not found
                </span>
            </>
        )}
        {weather && weather.data && weather.data.main &&
            (<>
                    <WeatherCard weather={weather} date={date}/>
                    <div>
                        <button onClick={handleAddCity}>Add to favorites</button>
                        {showConfirm && '✔'}
                    </div>

                </>
            )
        }
    </div>

}