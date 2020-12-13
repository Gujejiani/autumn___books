
import * as actionType from './actionTypes'
import axios from 'axios'

//it needs some time so while it fetching, we will show spinner
export const fetchingData = () => {
    return {
        type: actionType.FETCHING_DATA_START,
        loading: true
    }
}


//when user lefts details page we removing current book from there and showing all of them if he click details link without Read more
export const clearDetails = () => {
    return {
        type: actionType.CLEAR_DETAILS
    }
}




//if succes I sending books to my redux store
export const fetching_Succes = (books) => {
    return {
        type: actionType.FETCHING_DATA_SUCCES,
        books: books,
        loading: false,
    }
}

//in case of failed to see the error
export const fetching_Failed = (error) => {
    return {
        type: actionType.FETCHING_DATA_FAILED,
        error: error,
        loading: false
    }
}

//when user clicks the Read more we should get the info of currebt book
export const showAboutInfo = (info, index) => {
    return {
        type: actionType.READMORE_CLICKED,
        about: info,
        loading: false,
        index: index
    }
}

//geting id of items which are set to favourites

export const getFavouriteIndex = (index) => {
    return {
        type: actionType.ADDED_TO_FAVOURITES,

        index: index
    }
}




export const gettingBooks = () => {
    return dispatch => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&AIzaSyC17cdPd6IVuygpgrU0UpH6LDpsD40oJto').then(response => {



            //put them to the state
            dispatch(fetching_Succes(response.data.items))
        })
            .catch(error => {
                dispatch(fetching_Failed(error))
            })
    }
}
