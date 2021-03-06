import React from 'react'
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch]= useStateValue();
    console.log("this is the status of the basket >>>", basket);
    //dispatch allows to shoot the elements to the data layer
    const addToBasket=()=>{
        //dispatch the item to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },

        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=>(
                        <p>⭐</p> 
                    ))}
                </div>
            </div>

            <img src={ image } alt="Product_image" />
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
