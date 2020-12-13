import React, { Component } from 'react'
import classes from './Favourites.module.css'
import Header from '../../Components/Header/header'
import Content from '../../Components/Content/Content'
import Welcome from '../../Components/Welcome/welcome'
// import Spinner from '../../Components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import * as Switch from '../../Components/Switch/switch'
import Card from '../../Components/UI/bookCard/card'

class Fav extends Component{

    readMoreclickedHandler = (e, info) => {
        //getting information about book which has been clicked



        let data = [info]
        this.props.readMoreClicked(data) //send info about current book

    }


    favAddedHandler = (e, info, index) => {
        // change color acordingly
        let current = e.target
        //checking if current element cotain the StarICon
        // if (current.classList.contains('fas')) {
            this.props.getFavouriteIndex(index) //sending index of current array
        // }

    }

    render() {
        let show = false
        let books = this.props.books.map((key, index) => {
            let title = key.volumeInfo.title.split(' ').splice(0, 4).join(' ')
            if (key.fav) {
                show = true
                return <Card
                    clicked={(e) => this.readMoreclickedHandler(e, key)}
                    FavClick={(e) => this.favAddedHandler(e, key, index)}
                    Star={(key.fav != undefined && key.fav) ? classes.StarIcon : null}
                    Info={classes.Info}
                    src={Switch.putpictures(key.id)}
                    author={key.volumeInfo.authors ? key.volumeInfo.authors : 'Mandy Karby'}
                    key={key.id} title={title}


                />
            }
        })


        return (
            <div>
                <Header />
                <Welcome>Section  {show ? 'of Favourites Books' : ' of Favourites Books is empty'}  </Welcome>
                {/* <Spinner /> */}
                <Content >

                    {books}

                </Content>
            </div>
        )

    }
}
const mapStateToProps = state => {
    return {
        loading: state.loading,
        books: state.books,
        fetched: state.fetched,
        favourites: state.favourites
    }
}

const mapDispatchToProps = dispatch => {
    return {


        readMoreClicked: (info) => dispatch(actions.showAboutInfo(info)),
        showAllBooksInDetailPage: () => dispatch(actions.clearDetails()),
        getFavouriteIndex: (index) => dispatch(actions.getFavouriteIndex(index))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Fav)