import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';


function Wishlist() {
  const wishlistItems=useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  console.log("wishhhhhhhhh",wishlistItems);
  return (
    <div>
      <button style={{marginTop:'150px' }} className='btn btn-success ms-5'>
        
        <Link to={'/'} style={{textDecoration:'none' ,color:"white"}}><i class="fa-solid fa-arrow-left"></i> Back to home</Link>
        </button>
      <Row className='ms-5 me-5 mt-5' >
      {
        wishlistItems?.length>0?
        wishlistItems.map((item)=>(
          <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
           <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={item.thumbnail} height={'200px'}/>
      <Card.Body>
        <Card.Title>{item.title.slice(0,20)}</Card.Title>
        <Card.Text>
         {item.description.slice(0,50)}...
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
        <Button variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash"></i></Button>
        <Button variant= "outline-success"
        onClick={()=>handleWishlist(item)}
        ><i class="fa-solid fa-cart-plus"></i></Button>
        </div>
      </Card.Body>
    </Card>
          </Col>
          
        )):
        <p className='text-danger'>No items in wishlist</p>
      }
      </Row>
    </div>
  )
}

export default Wishlist