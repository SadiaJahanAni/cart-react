import React from "react";
import './Cart.css';


function Cart(props) {
    // console.log(props.cart)
    const cart = props.cart;
    const courseTotal = cart.reduce((sum, course) => sum + course.price, 0)
    const tax = courseTotal / 10;
    return (
        <div>
            <h2>Total Item Ordered:{cart.length} </h2>
            <p>Price:{courseTotal}</p>
            <p>Tax:{tax}</p>
            <p>Grand Total:{courseTotal + tax}</p>
            <button className="button">Place order <i class="fas fa-book"></i></button>
        </div>
    )
}
export default Cart;