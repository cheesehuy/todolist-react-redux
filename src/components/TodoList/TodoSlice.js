const initState =  [
        {id:1 , name :'data', priority: 'Low' , completed: true}
    ]

    


const todoListReducer = (state= initState , action) =>{
    // console.log({state , action})
    switch (action.type){
        case 'todoList/addTodo' : 
            return  [...state, action.payload ]
        default:
            return state
    }
}

export default todoListReducer