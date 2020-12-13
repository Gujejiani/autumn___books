import * as actionTypes from '../actions/actionTypes'
const initialState = {
    books: [],
    loading: false,
    error: null,
    details: null,
    fetched: false
}


const books = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_DATA_START:
            return {
                ...state,
                loading: action.loading,
                details: null,
            }
        case actionTypes.CLEAR_DETAILS:
            return {
                ...state,
                details: null
            }

        case actionTypes.FETCHING_DATA_FAILED:
            return {
                ...state,
                loading: action.loading,
                erro: action.error
            }
        case actionTypes.FETCHING_DATA_SUCCES:
            return {
                ...state,
                books: action.books,
                loading: false,
                fetched: true
            }
        case actionTypes.READMORE_CLICKED:

            return {
                ...state,
                loading: false,
                details: action.about
            }
        case actionTypes.ADDED_TO_FAVOURITES:

            let book = [...state.books];

            let currentBook = book[action.index]

            //adding new property of fav  in books object  which will be true or false
            if (!currentBook.fav || currentBook.fav === undefined) {
                currentBook.fav = true
            } else if (currentBook.fav !== undefined && currentBook.fav === true) {
                currentBook.fav = false
            }



            // if (currentBook.fav !== undefined && currentBook.fav === true) {
            //     currentBook.fav = false
            // }


            return {
                ...state,
                books: book,

                //books: books[action.index].push({ fav: true }),




            }
        default:
            return state
    }


}


export default books