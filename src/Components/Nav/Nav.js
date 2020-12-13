  
import classes from "./Nav.module.css"
import { NavLink } from 'react-router-dom'

function nav() {
    return (
        <div >
            <nav className={classes.Nav} >
                <ul>

                    <NavLink className="Link" to="/" ><li>Home</li></NavLink>
                    <NavLink className="Link" to="/favourites"><li>Favourites</li></NavLink>
                    <NavLink className="Link" to="/details" >  <li>Details</li></NavLink>


                </ul>
            </nav>
        </div>
    )
}
export default nav