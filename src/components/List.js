import { useEffect } from "react";
/* import { useSelector } from "react-redux"; */
import { useAppDispatch } from "../app/hooks";
import { fetchProducts } from "../features/productsSlice";
import Product from "./Product";
import { useAppSelector } from "../app/hooks";


const List = () => {
    const products = useAppSelector(state => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(products.length < 1)
        dispatch(fetchProducts());
    }, [dispatch,products])

    return (
        <div>
        <h1>List will be here</h1>
        {products.map((product) => (<Product key={product.id} {...product} cartItems={cartItems}/>)
        
        )}
        </div>


    )
}

export default List;