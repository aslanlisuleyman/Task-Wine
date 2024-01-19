import React, { useContext } from 'react'
import MainContext from '../../context/context'
import Card from '../Card/Card'
import "./Cards.scss"

const Cards = () => {
    const {filter,handleFilter,searchHandler}=useContext(MainContext)
  return (
    <div className='umumi'>

<div className='umumi__bir'>
<h3>Our Products</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>

<button onClick={(e)=>{
 handleFilter(e.target.value)
}} className='btn btn-warning'>Sort</button>
<input onChange={(e)=>{
 searchHandler(e.target.value)
}} placeholder='Search...' type="text" />
</div>

<div className='karts'>

    {filter.map((item,index)=>(
        <Card key={index} item={item}/>
    ))}

</div>

    </div>
  )
}

export default Cards