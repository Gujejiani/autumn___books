import classes from './header.module.css'
import Nav from '../Nav/Nav'


function header() {

    return (
        <div>
            <div className={classes.Container}>
                <div className={classes.Img} ></div>
                <Nav />

            </div>

        </div>
    )
}

export default header