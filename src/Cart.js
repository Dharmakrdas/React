import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const CartPage = ()=>{
    const cartItems = useSelector((state)=>state.cart.items);
    console.log(cartItems);
    
    return(
        <div className="resturnt-menu-container">
            <h1>This is cart page</h1>
            <div className="product-list-container">
          { cartItems && cartItems.map((item) => (
            <ProductList key={item.id} data={item} />
          ))}
        </div>
        </div>
    )
}

export default CartPage;