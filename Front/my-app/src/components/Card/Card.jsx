import React, { useContext } from 'react'
import "./Card.scss"
import MainContext from '../../context/context'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
    const {deleteHandler,addWish,addBasket}=useContext(MainContext)
  return (
   
    
     <div className='kart'>

        <div className='img'>
             <Link to={`/${item._id}`} className='ink'>
            <img src={item.image} alt="" />

            </Link>
        </div>
        <div>{item.title}</div>
        <div>${item.price}.00</div>
        <button onClick={()=>{
            deleteHandler(item._id)
        }} className='btn btn-danger'>Delete</button>
        <button onClick={()=>{
            addWish(item)
        }} className='btn btn-warning'> Add Wish</button>
        <button onClick={()=>{
            addBasket(item)
        }} className='btn btn-success'>Add Basket</button>

    </div>
    
   
  )
}

export default Card