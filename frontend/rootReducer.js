// src/reducers/rootReducer.js
import { combineReducers } from 'redux';

const initialState = {
    books: []
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return { ...state, books: action.payload };
        default:
            return state;
    }
};

export default combineReducers({
    book: bookReducer
});
