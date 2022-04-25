import {createStore} from 'redux'
import rootReducer from './reducer';

import { composeWithDevTools} from 'redux-devtools-extension'
const composeEnhancers =composeWithDevTools()

const store = createStore(rootReducer , composeEnhancers);

export default store

//use toolkit
// import {configureStore} from '@reduxjs/toolkit'
// import filtersReducer from '../components/Filters/FiltersSlice'
// import todoListReducer from '../components/TodoList/TodoSlice' 

// const store = configureStore({
//     reducer : {
//         filters : filtersReducer,
//         todoList : todoListReducer,
//     }
// })

// export default store ;