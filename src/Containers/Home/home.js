import React, { Component } from 'react'
import classes from './home.module.css'
import Header from '../../Components/Header/header'
import Content from '../../Components/Content/Content'
import Card from '../../Components/UI/bookCard/card'
import Welcome from '../../Components/Welcome/welcome'
import * as Switch from '../../Components/Switch/switch'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index.js'
import Spinner from '../../Components/UI/Spinner/Spinner'


class Home extends Component {





    componentDidMount() {
        this.props.showAllBooksInDetailPage()

        //to avoid resending of the request,  we are checking if data is already fetched or not
        if (!this.props.fetched) {
            this.props.fetchingStarted()
            this.props.gettingBooks()
        }

    }



    readMoreclickedHandler = (e, info, index) => {
        //getting information about book which has been clicked

        info.index = index //seting index manualy for details component



        let data = [info]
        this.props.readMoreClicked(data, index) //send info about current book

    }


    favAddedHandler = (e, info, index) => {
        // change color acordingly
        let current = e.target
        //checking if current element cotain the StarICon
        
            this.props.getFavouriteIndex(index) //sending index of current array
        





    }


    render() {

        //mapping books item and geeting the propertyes of it

        let books = this.props.books.map((key, index) => {
            let title = key.volumeInfo.title.split(' ').splice(0, 4).join(' ')
            //dinamicly rendering books Cards
            return <Card
                clicked={(e) => this.readMoreclickedHandler(e, key, index)}
                FavClick={(e) => this.favAddedHandler(e, key, index)}
                Star={(key.fav !== undefined && key.fav) ? classes.StarIcon : null}

                src={Switch.putpictures(key.id)}
                author={key.volumeInfo.authors ? key.volumeInfo.authors : 'Mandy Karby'}
                key={key.id} title={title}
                Info={classes.Info}

            />
        })


        //showing spinner while fetching data
        if (this.props.loading) {
            books = <Spinner />
        }

        return (
            <div className={classes.Body} >
                <Header />
                <Welcome >Welcome to Autumn books</Welcome>
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
        fetchingStarted: () => dispatch(actions.fetchingData()),
        gettingBooks: () => dispatch(actions.gettingBooks()),
        readMoreClicked: (info, index) => dispatch(actions.showAboutInfo(info, index)),
        showAllBooksInDetailPage: () => dispatch(actions.clearDetails()),
        getFavouriteIndex: (index) => dispatch(actions.getFavouriteIndex(index))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)