import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const [total, setTotal] = useState(0)
  const cartItems = useSelector((state) => state.cartReducer)
  const navigate=useNavigate()
  let totalprice = 0;
  cartItems.forEach(item => {
    totalprice=totalprice+item.price;
  });
  

  const dispatch = useDispatch()
  const handleCheckout=()=>{
    alert("Successfully placed the order");
    dispatch(emptyCart())
    navigate('/')
  }
  console.log("cart", cartItems);
  return (
    <div>
      <button style={{ marginTop: '150px' }} className='btn btn-success ms-5'>

        <Link to={'/'} style={{ textDecoration: 'none', color: "white" }}><i class="fa-solid fa-arrow-left"></i> Back to home</Link>
      </button>
      <div className='row w-100'>


        <div className='col-lg-6 col-md-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.length > 0 ?

                cartItems?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td><img src={item.thumbnail} alt="" height={'100px'} width={'100px'} /></td>
                    <td> &#8377; {item.price}</td>
                    <td>
                      <Button variant="outline-danger" onClick={() => dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button></td>
                  </tr>
                ))



                :
                <p className='text-danger ms-5 mt-5'>No Items in Cart</p>
              }
            </tbody>
          </table>
        </div>
        <div className='col-lg-4 col-md-4 m-5 d-flex justify-content-center align-items-center'>
          <div className='border shadow p-5'>
            <h3 className='text-primary'>Cart Summary</h3>
            <h5>Total Number of Products <span className='fw-bolder text-warning ms-2'>{cartItems?.length}</span></h5>
            <h5>Total Price: <span className='fw-bolder text-warning ms-2'>{totalprice}</span></h5>
            <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart