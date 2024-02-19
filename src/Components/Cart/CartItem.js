import { useDispatch } from "react-redux";
import { dataProducts } from "../../data/dataProducts";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useTranslation } from "react-i18next";

const CartItem = ({cartItem}) => {
    const { t } = useTranslation();
    const elements = dataProducts.find(item => item.id === cartItem.productId);
    const dispatch = useDispatch();
    
    return (
        <div>
            <p><b>{cartItem.quantity}</b> - {t(elements.name)}</p>
            <p>Price: ${elements.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart(
                {cartItemId: cartItem.id}
            ))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="price"/> 
            </span>
            
        </div>
    )
}

export default CartItem;