import { useState, useEffect } from "react";
import axios from "axios";

function useRequest(search){
    const [apiData, setApiData]= useState([]);
    useEffect(()=>{
        async function makeReqest(){
          try{
            if(search.length>=3){
            const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
            setApiData(response.data);
          }
          if(search.length===0){
            setApiData([]);
          }
        }catch (error) {
            console.error(error);      
        } 
        } makeReqest();
      },[search]);
      return apiData;
}
export default useRequest;