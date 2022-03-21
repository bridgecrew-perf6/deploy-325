import { useEffect, useState } from "react"
import axios from "axios";

export const Book = ()=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/books").then((response)=>{
            setData([...response.data])
        })
    },[])
      
       
       return (
           <div id = "data">
               {data.map((e)=>{
                   return (
                       <div>
                           <img src={e.imageUrl} alt="" />
                           <h3>{e.title}</h3>
                           {e.price}
                       </div>
                   )
               
                })}


               
             
           </div>
       )
       } 
   


