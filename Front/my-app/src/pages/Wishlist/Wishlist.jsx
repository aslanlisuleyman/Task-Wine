import React, { useContext } from 'react'
import MainContext from '../../context/context'
import "./Wishlist.scss"
import {Helmet} from "react-helmet";
const Wishlist = () => {
  const {handleDelete,wishlist,removeWish}=useContext(MainContext)
  return (
    <div>
<Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

     <button onClick={handleDelete} className='btn btn-danger'>Delete All</button>

     <div className='wish'>

   { wishlist.map((item,index)=>{
    return(
      <div class="card aa" style={{width:" 18rem"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.price}</p>
    <a onClick={()=>removeWish(item._id)} href="#" class="btn btn-danger">Delete Wish</a>
  </div>
</div>
    )
   })}

     </div>

    </div>
  )
}

export default Wishlist