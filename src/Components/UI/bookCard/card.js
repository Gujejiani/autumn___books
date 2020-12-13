import classes from './card.module.css';
import { NavLink } from 'react-router-dom';


function card(props) {

    return (

        <div className={classes.Card} >

            <div className={classes.Container} >


                <div >

                    <img alt="flower" className={classes.Img} src={props.src} />

                </div>


                <div className={classes.Item} >

                    <div className={classes.Fav} onClick={props.FavClick} >add to favourites      <i className={`fas fa-star ${props.Star} ${classes.Star}`}></i> </div>
                    <p>{props.title}</p>
                    <p>author</p>
                    <label className={classes.Author} >{props.author}</label>
                    <div onClick={props.clicked} className={`${classes.ReadMore} ${props.ReadMore}`}> <NavLink to="/details" ><span>Read More</span></NavLink> </div>
                </div>


            </div>

            {/* showing only in details page */}
            <div className={props.Info} >
                <p>category: {props.category}</p>
                <p>publishDate: {props.date}</p>
                <p>language: {props.language}</p>
            </div>
        </div>
    )
}

export default card