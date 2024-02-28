import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart, getCartItems, updateQuantity } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

const ProductItem = ({everyItem}) => {
    const { t } = useTranslation();
    const { name, brand, price, image } = everyItem;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const items = useSelector(getCartItems);

    const itemsInCart = items.some(item => item.productId === everyItem.id);

    const addToCart = () => {
        if (!itemsInCart) {
            dispatch(addItemToCart({everyItem, quantity}));
            setQuantity(1)
        } else {
            dispatch(updateQuantity({everyItem, quantity}))
            setQuantity(1)
        }
    }

    return (
        <div className="product-card">
            <img src={image} alt="cosmetics"/>
            <h5>{brand}</h5>
            <h2>{t(name)}</h2>
            <p>$ {price}</p>
            <div className="box_quantity">
            <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity}/>
            <button className="add_btn" onClick={addToCart}>{t('Add to cart')}</button>
            </div>
        </div>
    )
}

export default ProductItem;