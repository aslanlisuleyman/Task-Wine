import React, { useContext } from 'react'
import MainContext from '../../context/context'
import "./Basket.scss"
import {Helmet} from "react-helmet";
const Basket = () => {
  const {basket,handleInc,handleDec}=useContext(MainContext)
  let totalPrice=0
  return (
    <div>
<Helmet>
                <meta charSet="utf-8" />
                <title>Basket Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
      <th scope="col">Count</th>
      <th scope="col"></th>
      <th scope="col">TotalPrice</th>
    </tr>
  </thead>
  <tbody>
    { basket.map((item,index)=>{
      totalPrice += item.totalPrice

      return(
        <tr key={index}>
      
      <td className='im'><img src={item.image} alt="" /></td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td><button onClick={()=>handleDec(item)} className='btn btn-danger'>-</button></td>
      <td>{item.count}</td>
      <td><button onClick={()=>handleInc(item)} className='btn btn-success'>+</button></td>
      <td>{item.totalPrice}</td>

    </tr>

      )

    })}

    
    
  </tbody>
</table>

<h1>TotalPrice:{totalPrice}</h1>

    </div>
  )
}

export default Basket