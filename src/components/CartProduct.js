/* import React from "react";
import { Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { removeItemFromCart } from '../features/cartSlice';
import { useLocation } from "react-router-dom";

const CartProduct = (props) => {
    const { image, title, price, rating, description } = props;
    const { cartItems, product } = props; // Assuming you pass cartItems and product as props
    const dispatch = useAppDispatch();
    const location = useLocation();

    const handleRemoveProduct = () => {
        console.log("Product", product);
        dispatch(removeItemFromCart(product));
    }

    return (
        <section className="Detail">
            <article className="Detail_thumbnail">
                <img src={image} alt={title} />
            </article>
            <article className="Detail_info">
                <div className="Detail_info_header">
                    <h2>{title}</h2>
                </div>
                <div className="Detail_info">
                    <span className="Detail_info_price">{price}</span>
                    <span className="Detail_info_rating">Rating: {rating.rate}</span>
                </div>
                <p className="Detail_info_description">{description}</p>
                {location.pathname === "/cart" ? (
                    <Button variant="danger" onClick={handleRemoveProduct}>
                        Remove from cart
                    </Button>
                ) : (
                    <Button variant="primary" onClick={handleRemoveProduct}>
                        Add to cart
                    </Button>
                )}
                {/* Check if the product is in the cart and display the remove button */
    /*             {cartItems.some(item => item.id === product.id) && (
                    <Button variant="danger" onClick={handleRemoveProduct}>
                        Remove from cart
                    </Button>
                )}
            </article>
        </section>
    )
}

export default CartProduct;
 */ 