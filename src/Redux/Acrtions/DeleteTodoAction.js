export const TodoDeleteAction=(data)=>{
    return(
        {
            type:"Get TODO's",
            payload:data
        }
    )
}

export const TodoDeleteCreater=(data)=>{
    return dispatch=>{
        console.log("working delete Todo Reducer")
        dispatch(TodoDeleteAction(data))   
    }
}