export const clickedTabsAction=(data)=>{
    return{
        type:"SetTabs",
        payload:data
    }
}

export const clickedTabsActionCreater=(data)=>{
    return dispatch=>{
        console.log("day is dispatched: "+data);
        dispatch(clickedTabsAction(data));
         }   
}