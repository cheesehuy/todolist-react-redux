import { createSelector } from "reselect";


export const searchTextSelector = (state) => state.filters.search ;
export const todoListSelector = (state) => state.todoList;
export const statusfilterSelector = (state) => state.filters.status
export const prioritiesfilterSelector = (state) => state.filters.priority

export const account = (state) => state.account



//use reselect
export const todoRemainingSelector = createSelector(
    todoListSelector,
    statusfilterSelector,
    searchTextSelector,
    prioritiesfilterSelector,
    (todoList,status,searchText,priorities) =>{
        // console.log('todolist in selector:  ' , todoList)
        // if(!searchText) return todoList
        
        return todoList.filter((todo)=>{
            if (status === 'All') {
                return priorities.length ? 
                        todo.name.includes(searchText) && priorities.includes(todo.priority):
                        todo.name.includes (searchText)

            }
            return todo.name.includes(searchText) && 
                   (
                       status === 'Completed'
                       ? todo.completed
                       : ! todo.completed
                   ) &&
                   (
                       priorities.length ?
                       priorities.includes(todo.priority)
                       : true
                   )
                   
        })
        
    }
)