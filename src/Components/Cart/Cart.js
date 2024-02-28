import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice, getTotalQuantity, } from "../../redux/cartSlice";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import './Cart.css';


const Cart = () => {
    const { t } = useTranslation();
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const quantity = useSelector(getTotalQuantity);
    const [isActive, setIsActive] = useState(false);

    const checkCartnotEmpty = () => {
        if (quantity === 0) {
            return (
                <div className={isActive ? 'cart-items' : 'cart-items cart-none'}>
                    <h5>YOUR CART IS EMPTY</h5>
                </div>
            ) 
        } else {
        return (
            <div className={isActive ? 'cart-items' : 'cart-items cart-none'}>
                {cartItems.map((cartItem, id) => <CartItem cartItem={cartItem} key={id}/>)}
                <hr/>
                <h3>{t('TOTAL')}: ${totalPrice}</h3>
                <button onClick={ () => alert("It's not a real shop") } className='btn-buy'>{t("BUY")}</button>  
            </div>
        )
    }
    }

    
    const onCartHide = (event) => {
        setIsActive(current => !current);
    } 

    const emptyCart = () => {
        if (quantity === 0) {
            return (
                <span className="quantityNone">{quantity}</span>
            )
        }
        else {
            return(
                <span className='item-count'>{quantity}</span>
            )
        }
    }

    return (
        <>
        <div className="cart_location">
        <button className='cart-btn'>
        <svg className="heart">
        <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path>
        </svg>
        </button>
        <button onClick={onCartHide} className='cart-btn'>
            <svg className="cart">
            <path d="M23.498 10c.326 0 .566.28.487.57l-3.078 11.32c-.177.652-.816 1.11-1.55 1.11H4.643c-.733 0-1.371-.458-1.55-1.11L.015 10.57c-.079-.29.16-.57.487-.57h22.996zm-3.112 9.999H3.613l.453 1.668a.588.588 0 0 0 .576.414h14.716c.271 0 .509-.17.575-.414L20.386 20zm.815-3H2.797l.544 2h17.317l.543-2zm.816-3H1.981l.544 2h18.948l.544-2zm.839-3.08H1.144L1.71 13h20.579l.567-2.08zm-9.037-9.205l5.612 5.2a.5.5 0 1 1-.68.734l-5.612-5.2a1.674 1.674 0 0 0-2.278 0l-5.612 5.2a.5.5 0 1 1-.68-.734l5.612-5.2a2.674 2.674 0 0 1 3.638 0z"></path>
            </svg>
        </button> 
        <span >{emptyCart()}</span>
        </div>

        <div className="cart_contents">
        {checkCartnotEmpty()}   
        </div>
        </>
    )
}

export default Cart;