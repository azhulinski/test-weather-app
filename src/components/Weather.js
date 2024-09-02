import '../css/Weather.css'
import Header from "./Header";
import WeatherMain from "./WeatherMain";
import {Route, Routes} from "react-router-dom";
import CitiesList from "./CitiesList";

export default function Weather() {

    const routes = (
        <Routes>
            <Route path="/" exact element={<WeatherMain/>}/>
            <Route path="/favorites" exact element={<CitiesList/>}/>
        </Routes>
    )

    return <div>
        <Header/>
        {routes}
    </div>
}