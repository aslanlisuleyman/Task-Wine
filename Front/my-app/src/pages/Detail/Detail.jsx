import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import "./Detail.scss"
import {Helmet} from "react-helmet";
const Detail = () => {
  const[data,setData]=useState({})
  const{id}=useParams()

  useEffect(()=>{
   axios.get(`http://localhost:3011/users/${id}`).then(res=>{
    setData(res.data)
   })
  },[])
  return (
    <div className='detail'>
<Helmet>
                <meta charSet="utf-8" />
                <title>Detail Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<div class="card d" style={{width: "18rem"}}>
  <img  src={data.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{data.title}</p>
    <p>{data.price}</p>
  </div>
</div>

    </div>
  )
}

export default Detail