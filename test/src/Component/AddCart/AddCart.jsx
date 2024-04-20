import React, { useState } from 'react';
import './AddCart.css'

const AddCart = () => {
  const [cartItems, setCartItems] = useState([]);

  React.useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = storedCartItems.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setCartItems(updatedCartItems);
  }, []);

  const updateCart = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className='main container p-0'>
      {cartItems.map(item => (
        <div className='row w-100 m-0 mb-3'>
          <div key={item.id} className='img col-lg-2 col-sm-3 col-4 border rounded-start border-secondary d-flex justify-content-center align-items-center '>
            <img src={item.src} alt="" />
          </div>

          <div className="detail col-lg-10 col-sm-9 col-8 border rounded-end text-start border-secondary d-lg-flex justify-content-between">
            <div>
              <div className="product_title card-title m-0 text-truncate" style={{ color: "grey", fontSize: "18px", msTextOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "400px" }}>{item.productdetail?.Name}</div>

              <div className="product_price fs-5 fw-bold" style={{ color: "rgb(99, 97, 97)" }}>Price: {item.price}/-</div>

              <div className="product_description card-text rounded-pill px-2 my-1" style={{ width: "max-content", backgroundColor: "rgb(241, 241, 241)", fontSize: "14px", color: "rgb(66, 66, 74)" }}>{item.delivery}</div>

              <div className="ratings d-flex align-items-center">

                <div className="product_description rounded-pill bg-success my-2 px-2 d-flex align-items-center">
                  <span className="pe-1 text-light" style={{ fontSize: "15px", fontWeight: "bold" }}>{item.rating}</span>
                  <i className="fa-solid fa-star" style={{ color: "#fafafa", fontSize: "10px" }}></i>
                </div>

                <div className="rating-count ps-1" style={{ color: "rgb(97, 97, 115)", fontSize: "14px" }}>
                  {item.reviews}
                </div>

              </div>
            </div>
            <div>
              <div className='d-flex mt-1'>
                <p className='me-1'>No. of Quntity:</p>
                <button onClick={() => updateCart(item.id, item.quantity + 1)} className='btn-success btn'>+</button>
                <p className='mx-2 my-1'>{item.quantity}</p>
                <button onClick={() => updateCart(item.id, item.quantity - 1)} className='btn btn-danger'>-</button>
              </div>
              <div className='remove text-lg-center'>
                <button className="remove-button border btn btn-primary" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>

          </div>

        </div>
      ))} 
      {cartItems.length > 0 && (
        <div className='text-end mt-2'>
          <p className='fs-4 m-0'>Total Price:{getTotalPrice()}/-</p>
          <button className='btn btn-success me-4' style={{ width: "140px" }}>Buy Now</button>
        </div>
      )}
    </div>
  );
}

export default AddCart;

