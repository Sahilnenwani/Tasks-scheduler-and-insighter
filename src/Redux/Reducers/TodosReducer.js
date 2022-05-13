const initialState={
    todos : [

    ]
}


const TodoReducer=(state=initialState,action)=>{
    // console.log("initial data on call",action.payload)
    switch (action.type) {
        case "Get TODO's":
            return(
                {
                    ...state,
                    todos: action.payload
            })

        default:
            return state;
    }
}

export default TodoReducer;