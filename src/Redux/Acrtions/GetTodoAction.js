import { db } from "../../fire";
// import {
//    collection,
// } from "firebase/firestore";
import { collection, Firestore, getDocs } from "firebase/firestore";


export const TodoGetDataAction=(data)=>{
    return(
        {
            type:"Get TODO's",
            payload:data
        }
    )
}

export const TodoGetDataCreater=()=>{
    return async (dispatch)=>{

        let todosData=[];
        const querySnapshot = await getDocs(collection(db, "todos"));
        querySnapshot.forEach((doc)=>{
                   todosData.push({ id: doc.id, ...doc.data()})
                  });
         

        // const events = await Firestore().collection('todos')
        // events.get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //        todosData.push({ id: doc.id, ...doc.data() })
        //     })
        //  })
        
        // console.log("Get dipatch data",todosData)      


    //   db.collection("todos").onSnapShot(function (querySnapshot){
    //        todosData.push(querySnapshot.docs.map((doc)=>({
    //            id:doc.id,
    //            todo:doc.data().todo,
    //            inprogress:doc.data().inprogress
    //        })))
    //    })

             dispatch(TodoGetDataAction(todosData))   
    }
}