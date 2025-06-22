import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import { categories } from '../Category'
import Card from '../components/Card'
import {food_items} from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from 'react-icons/rx'
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Home = () => {
  let {cate,setCate,input,showCart,setShowCart} = useContext(dataContext)
function filter(category){
    if(category === "All"){
      setCate(food_items)
    }
    else{
      let newList = food_items.filter((item)=>( item.food_category===category))
      setCate(newList)
    }
  }

  let items = useSelector(state=>state.cart)

  let subtotal = items.reduce((total,item)=>total+item.qty*item.price,0)
  // console.log(subtotal);
  let deliveryFee=20;
  let taxes=subtotal*0.5/100;
  let total = Math.floor(subtotal+deliveryFee+taxes)
  
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      {!input? <div  className='flex flex-wrap justify-center
      w-[100%] items-center gap-5'>
        {categories.map((item)=>{
           return <div 
           
           className='w-[140px] h-[150px]
           flex flex-col items-start gap-5 p-5 justify-start
           text-[20px] font-semibold rounded-lg shadow-xl
           hover:bg-green-200 cursor-pointer 
           transition-all duration-200 text-gray-600 bg-white
            ' onClick={()=>filter(item.name)}>
            {item.image}
            {item.name}
             
          </div>
        })}
      </div>:null }
      
      <div className='w-full flex flex-wrap gap-5 px-5 
       pt-8 pb-8 justify-center items-center'>
        {cate.length>1 ? cate.map((item)=>(
        <Card name={item.food_name} image={item.food_image} price={item.price}
        id={item.id} type={item.food_type} />
       ))
       : <div className='text-center text-2xl text-green-500 font-semibold 
          pt-5'>No Dish Found</div> }
       
      </div>
      <div className={`w-full md:w-[40vw] flex flex-col items-center h-[100%] p-6 fixed top-0 right-0 bg-white
      shadow-xl duration-500 overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`} >
        <header className='w-full flex justify-between items-center '>
          <span className='text-green-400 text-[18px] font-semibold'>Order Items</span>
          <RxCross2 className='w-[30px] h-[30px] hover:text-gray-600 cursor-pointer text-green-400 text-[18px] font-semibold'
          onClick={()=>setShowCart(false)} />
        </header>
        {items.length>0?<>
        <div className='w-full mt-9 flex flex-col gap-8'>
          {items.map((item)=>(
            <Card2 name={item.name} price={item.price} image={item.image}
            id={item.id} qty={item.qty} /> 
          ))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7
        flex flex-col gap-2 p-8 '>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
            <span className='text-green-400 font-semibold text-md'>Rs {subtotal}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
            <span className='text-green-400 font-semibold text-md'>Rs {deliveryFee}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
            <span className='text-green-400 font-semibold text-md'>Rs {taxes}/-</span>
          </div>
          
        </div>
        <div className='w-full flex justify-between items-center p-9'>
            <span className='text-2xl text-gray-600 font-semibold'>Total</span>
            <span className='text-green-400 font-semibold text-xl'>Rs {total}/-</span>
          </div>
          <button className='w-[80%] p-3 rounded-lg bg-green-500 hover:bg-green-400 text-white
          transition-all' onClick={()=>{
            toast.success("Order Place")
          }}>Place Order</button>
          </>
          : <div className='text-center text-2xl text-green-500 font-semibold 
          pt-5'>
            Empty Cart
          </div>
           }
        
      </div>
    </div>
    
  )
}

export default Home