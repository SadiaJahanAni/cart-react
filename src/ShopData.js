import React, { useEffect, useState } from "react";
import CourseData from './fakeData/CourseData';
import ShopItems from "./ShopItems";
import './ShopData.css';
import Cart from "./Cart";


function ShopData() {

    const [course, setCourse] = useState(CourseData);
    const [cart, setCart] = useState([]);
    // console.log(course);

    const handleButton = ((course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    })

    return (
        <div className="cart">

            <div className="course-container">
                {
                    CourseData.map((course) => <ShopItems shopitems={course} handleButton={handleButton}
                    />)
                }
            </div>
            <div className="cart-total">
                <Cart cart={cart} />
            </div>
        </div>
    )
}
export default ShopData;