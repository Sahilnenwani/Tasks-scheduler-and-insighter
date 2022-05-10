import { db } from "../../fire";
import {
    getFirestore,
     query,
   collection,
   where,
    addDoc,
} from "firebase/firestore";



export const TodoDataAction=(data)=>{
    return(
        {
            type:"Add TODO's",
            payload:data
        }
    )
}

export const TodoDataCreater=(data)=>{
    return async (dispatch)=>{
        console.log("working Todo Reducer");
        await addDoc(collection(db, "todos"), {
            inprogress:true,
            time:data.time,
            todo:data.todo,
          });
        dispatch(TodoDataAction(data))   
    }
}