const initState = {
    
    account : null,
    networkId: null,
    
}

const loginReducer = (state= initState , action) =>{
    // console.log({state , action})
    switch (action.type){
      
        case 'ACCOUNT' :
            return {
                ...state,
                account : action.account,
                networkId : state.networkId
            }
        case 'NETWORKID' :
            return {
                ...state,
                account : state.account,
                networkId : action.networkId
            }
       
            
        default:
            return state
    }
}

export default loginReducer