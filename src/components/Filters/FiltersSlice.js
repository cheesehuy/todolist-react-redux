const initState = 
     {
        search : '',
        status : 'ALL',
        priority : []
    }
    


const filtersReducer = (state= initState , action) =>{
    // console.log({state , action})
    switch (action.type){
        
        case 'filters/searchFilterChange' :
            return { 
                    ... state,
                    search : action.payload
            }
        case 'filter/statusFilterChange' :
            return{
                ...state,
                status : action.payload
            }
        case 'filter/priorityFilterChange':
            return {
                ...state,
                priority : action.payload
            }
        default:
            return state
    }
}

export default filtersReducer