import React, { Component } from 'react'
import Header from '../../Components/Header/header'
import Content from '../../Components/Content/Content'
import Welcome from '../../Components/Welcome/welcome'
// import Spinner from '../../Components/UI/Spinner/Spinner'
// import * as actions from '../../store/actions/index'
import * as Switch from '../../Components/Switch/switch'
import Card from '../../Components/UI/bookCard/card'
import { connect } from 'react-redux'
import classes from './Details.module.css'
import * as actions from '../../store/actions/index'
class Details extends Component  {




    favAddedHandler = (e, index) => {

        let current = e.target


        //checking if current element is StarICon
        if (current.classList.contains('fas')) {
            this.props.getFavouriteIndex(index) //sending index of current array
        }
    }




    render() {


        let booksFromStore = [...this.props.books]

        //if user clicked ReadMore we are showing only  details of current book  or we are showing details of all the books
        if (this.props.details) {
            booksFromStore = this.props.details

        }

        let books = booksFromStore.map((key, index) => {
            let title = key.volumeInfo.title.split(' ').splice(0, 4).join(' ')




            let Clickedindex = index  // if ReadMore clicked we are sending the index  which we set manualy in the home.js
            if (key.index !== undefined && key.index) {


                Clickedindex = key.index
            }


            //dinamicly rendering books Cards
            return <Card src={Switch.putpictures(key.id)}

                author={key.volumeInfo.authors ? key.volumeInfo.authors : 'Mandy Karby'}
                ReadMore={classes.ReadMore}
                FavClick={(e) => this.favAddedHandler(e, Clickedindex)}
                Star={(key.fav !== undefined && key.fav) ? classes.StarIcon : null}
                key={key.id}
                title={title}
                category={key.volumeInfo.categories ? key.volumeInfo.categories : 'Flora'}
                language={key.volumeInfo.language}
                date={key.volumeInfo.publishedDate}
                Info={classes.Info}
            />
        })




        return (
            <div>
                <Header />
                <Welcome>about info</Welcome>
                {/* <Spinner /> */}
                <Content Content={this.props.details ? classes.Content : null} >
                    {books}


                </Content>
            </div >
        )

    }
}
const mapStateToProps = state => {
    return {
        loading: state.loading,
        books: state.books,
        details: state.details
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getFavouriteIndex: (index) => dispatch(actions.getFavouriteIndex(index))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Details) 