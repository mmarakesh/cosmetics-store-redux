import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

const ProductItem = ({everyItem}) => {
    const { t } = useTranslation();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return (
        <div className="product-card">
            <img src={everyItem.image} alt="cosmetics"/>
            <h5>{everyItem.brand}</h5>
            <h2>{t(everyItem.name)}</h2>
            <p>$ {everyItem.price}</p>
            <div className="box_quantity">
            <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity}/>
            <button className="cart_btn" onClick={() => {dispatch(addItemToCart({everyItem, quantity}))}}>{t('Add to cart')}</button>
            </div>
        </div>
    )
}

export default ProductItem;