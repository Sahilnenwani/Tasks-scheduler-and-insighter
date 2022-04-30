import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: 'Karachi'},
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': '8d9728eadamshfb0f68ef85d7f64p1366d7jsn6a1a753bd1a7'
  }
};


export const fetchData=(data)=>{
    return{
        type:"GET_WEATHER_DATA",
        payload:data
    }
}


export const fetchDataCreater=()=>{
    return dispatch=>{
        axios.request(options).then((response) => {
             console.log("actions",response.data)
             let wData=response.data;
             dispatch(fetchData(wData));
           }).catch(function (error) {
             console.error(error);
           });
         }
    
}