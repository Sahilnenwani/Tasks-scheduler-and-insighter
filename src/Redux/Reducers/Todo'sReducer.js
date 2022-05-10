const initialState=[ ]


const ToDoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "Get TODO's":
            return(
            [
                ...state,
                {...action.payload}
            ])
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