const initState = {
    count: 10,
    users: [
        {name:'alamin', id: 1},
        {name:'alamin', id: 2},
        {name:'alamin', id: 3},
        {name:'alamin', id: 4},
        {name:'alamin', id: 5}
    ]
}

function rootReducer(state=initState, action){
    
    switch(action.type){

        case 'ADD':{
            return{
                count: state.count + 1
            }
        }

        case 'SUB':{
            return{
                count: state.count - 1
            }
        }
        default: return state
    }


    // return initState
}

export default rootReducer;