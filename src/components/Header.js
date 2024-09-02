import '../css/Header.css'
import {NavLink} from "react-router-dom";

export default () => {
    return (
            <header className="main-header">
                <nav className="main-header__nav">
                    <ul className="main-header__item-list">
                        <li className="main-header__item"><NavLink to="/">Main</NavLink></li>
                        <li className="main-header__item"><NavLink to="/favorites">Favorites</NavLink></li>
                    </ul>
                </nav>
            </header>
    )
}