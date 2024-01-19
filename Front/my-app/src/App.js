import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Basket from "./pages/Basket/Basket";
import Detail from "./pages/Detail/Detail";
import Wishlist from "./pages/Wishlist/Wishlist";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import toast from 'react-hot-toast';

function App() {
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState("")
  const[filter,setFilter]=useState([])
  const[wishlist,setWishlist]=useState(localStorage.getItem("wishlists")?JSON.parse(localStorage.getItem("wishlists")):[])
  const[basket,setBasket]=useState(localStorage.getItem("baskets")?JSON.parse(localStorage.getItem("baskets")):[])
  const[counter,setCounter]=useState(localStorage.getItem("counter")?Math.max(0,parseInt(localStorage.getItem("counter"))):0)


  const handleDelete=()=>{
    setWishlist([])
    localStorage.removeItem("wishlists")
  }
  const deleteHandler=(id)=>{
    axios.delete(`http://localhost:3011/users/${id}`).then(res=>{
      setData([...res.data])
      setFilter([...res.data])
    })
}
    const addWish=(item)=>{
      const target=wishlist.find(pro=>pro._id==item._id)
      if(target){
        toast.error("movcuddur")
      }else{
        setWishlist([...wishlist,item])
        localStorage.setItem("wishlists",JSON.stringify([...wishlist,item]))
        toast.success("Elave olundu")
      }
    }

    const removeWish=(id)=>{
      const target=wishlist.find(pro=>pro._id==id)
      wishlist.splice(wishlist.indexOf(target),1)
      setWishlist([...wishlist])
      localStorage.setItem("wishlists",JSON.stringify([...wishlist]))
    }

    const addBasket=(item)=>{
      const target=basket.find(pro=>pro._id==item._id)
      if(!target){
        const newItem={...item,count:1,totalPrice:item.price}
        setBasket([...basket,newItem])
        localStorage.setItem("baskets",JSON.stringify([...basket,newItem]))
        toast.success("Elave olundu")
        
      }else{
        const newData={...item,count:target.count+1,totalPrice:item.price*(target.count+1)}
        setBasket([...basket.filter(ele=>ele._id != item._id),newData])
        localStorage.setItem("baskets",JSON.stringify([...basket.filter(ele=>ele._id != item._id),newData]))
        toast.success("Elave olundu")
      }
    }

    const handleInc=(item)=>{
      let updatedata=[...basket]
      let target=updatedata.find(res=>res._id == item._id)
      target.count += 1
      target.totalPrice=item.price*target.count
      setBasket(updatedata)
      localStorage.setItem("baskets",JSON.stringify(updatedata))
    }

    const handleDec=(item)=>{
      let updatedata=[...basket]
      let target=updatedata.find(res=>res._id == item._id)
      if(target.count>1){
        target.count -= 1
      target.totalPrice=item.price*target.count
      setBasket(updatedata)
      localStorage.setItem("baskets",JSON.stringify(updatedata))
      }else{
         setCounter(counter-1)
         localStorage.setItem("counter",counter-1)
        updatedata=updatedata.filter(pro=>pro._id !==item._id)
        setBasket(updatedata)
        localStorage.setItem("baskets",JSON.stringify(updatedata))
      }
    }
  
  useEffect(()=>{
  axios.get("http://localhost:3011/users").then(res=>{
    setData(res.data)
    setFilter(res.data)
    setLoading(false)
  }).catch(error=>{
    setLoading(false)
    setError(error)
  })
  },[])

const handleFilter=()=>{
  setFilter([...data.sort((a,b)=>b.price-a.price)])
}

const searchHandler=(searchValue)=>{
  if(searchValue){
    setFilter([...data.filter(item=>item.title.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
  } else{
    setFilter([...data])
  }
}

  const datas={
    data,setData,loading,setLoading,error,setError,filter,setFilter,wishlist,setWishlist,basket,setBasket,counter,setCounter,handleDec,handleInc,handleDelete,handleFilter,searchHandler,addBasket,addWish,removeWish,deleteHandler
  }
  return (
    <MainContext.Provider value={datas}>
    
     <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<Add/>}/>
      <Route path="/basket" element={<Basket/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/:id" element={<Detail/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </MainContext.Provider>
   
  );
}

export default App;
