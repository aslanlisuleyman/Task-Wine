import React, { useContext } from 'react'
import MainContext from '../../context/context'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import axios from 'axios';
import "./Add.scss"
import {Helmet} from "react-helmet";
const Add = () => {
  const{filter,deleteHandler}=useContext(MainContext)

  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      price: '',
    },
    onSubmit: (values,{resetForm}) => {
      if(!values.image|| !values.title|| !values.price)
      {
        toast.error("Zehmet olmasa doldrun")
        return;
      }
      axios.post("http://localhost:3011/users",{...values}).then(res=>{
        console.log(res)
        resetForm()
        toast.success("Elave olundu")
      })
      
    },
  });
  return (
    <div className='add'>
<Helmet>
                <meta charSet="utf-8" />
                <title> Add Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

 <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Image</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.image}
      />
      <label htmlFor="lastName">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label htmlFor="email">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <button type="submit">Submit</button>
    </form>

         
<table class="table">
  <thead>
    <tr>
    <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    { filter.map((item,index)=>{

      return(
        <tr key={index}>
      
      <td>{item._id.slice(0,5)}</td>
      <td className='ii'><img  src={item.image} alt="" /></td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td><button onClick={()=>{deleteHandler(item._id)}} className='btn btn-danger'>Delete</button></td>
      
      

    </tr>

      )

    })}

    
    
  </tbody>
</table>


    </div>
   


     

  );
 
}

export default Add