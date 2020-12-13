import classes from './Content.module.css'

function content(props) {




    return (
        <div className={`${classes.Container}  ${props.Content}`} >
            {props.children}
        </div>
    )
}


export default content