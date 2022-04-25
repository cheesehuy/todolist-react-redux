import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodoSlice"
import loginReducer from "../LoginSlice"
import {combineReducers} from 'redux'

// const rootReducer = (state ={} , action) =>{
//     console.log(state)
//     return {
//         filters : filtersReducer(state.filters,action),
//         todoList : todoListReducer(state.todoList,action),
//         // Login : loginReducer(state.Login,action)
        
//     }
// }
const rootReducer  = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
    Login : loginReducer
})
export default rootReducer