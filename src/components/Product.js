import {Button} from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import {addToCart} from '../features/cartSlice';
import {removeItemFromCart} from '../features/cartSlice'

const Product = (props) => {
    const { image, title, price, rating, description,  } = props;
    const product = props
    const dispatch = useAppDispatch();
    
    const handleAddProduct = () => {
        console.log("Product", product)
        dispatch(addToCart(product))
    }
    const handleRemoveProduct = () => {
        console.log("Product", product)
        dispatch(addToCart(product))
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
                <span className="Detail_info_price">{price}
                </span>
                <span className="Detail_info_rating">Rating:{rating.rate}</span>
            </div>
            <p className="Detail_info_description">{description}</p>
            <Button variant="primary" onClick={handleAddProduct}>Add to cart</Button>
            <Button variant="danger" onClick={handleRemoveProduct}>Remove from cart</Button>
        </article>
    </section>
)
}

export default Product;