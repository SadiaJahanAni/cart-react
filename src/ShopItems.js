import React from "react";
import './ShopItems.css';



function ShopItems(props) {
    // console.log(props.shopitems);
    const { name, instructor, price, image } = props.shopitems;
    return (


        <div className="cart-container">
            <div className="image">
                <img src={image} alt="" />
            </div>

            <div>
                <h1>Name:{name}</h1>
                <h3>Instructor:{instructor}</h3>
                <h3>Price:{price}</h3>
                <button onClick={() => (props.handleButton(props.shopitems))} className="btn">Enroll now <i class="fas fa-book"></i></button>
            </div>
        </div>




    )
}

export default ShopItems;