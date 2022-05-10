const initialState=[ ]


const ToDoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "Add TODO's":
            return(
            [
                ...state,
                {...action.payload}
            ])
        case "Get TODO's":
            return(
                    action.payload
                )
        case "Delete TODO":
            return(
            [
            ...action.payload
            ])

        default:
            return state;
    }
}

export default ToDoReducer;