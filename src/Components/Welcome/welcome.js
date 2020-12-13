import Logo from '../../assets/img/autumn.png'
import classes from '../Welcome/welcome.module.css'
function welcome(props) {
    return (
        <div className={classes.Body} >

            <h1 className={props.H1} >{props.children}</h1>
            <img className={classes.Img} alt="autumn" src={Logo} />
        </div>
    )
}

export default welcome