import {useDispatch, useSelector} from "react-redux";
import WeatherCard from "./WeatherCard";
import '../css/Weather.css';
import {removeCity} from "../store/actions/citiesAction";

const _ = require('lodash');

export default function CitiesList() {

    const favorites = useSelector(state => state.citiesReducer.cities)
    const dispatch = useDispatch();

    const date = new Date();

    const handleRemoveCity = (index) => {

        dispatch(removeCity(index))

    }

    return <div className="cities-list">

        {!_.isEmpty(favorites) && favorites.map((city, index) => (
            <div className="weather-app" key={index}>
                <WeatherCard weather={city} date={date} key={index}/>
                <div>
                    <button onClick={e => handleRemoveCity(index)}>remove from favorites</button>
                </div>
            </div>
        ))}

    </div>

}