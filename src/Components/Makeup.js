import { t } from "i18next";
import Cart from "./Cart/Cart";
import AllCategories from "./Filter/AllCategories";
import Products from "./ProductsComponents/Products";

function Makeup() {

    return(
        <div>
            <div className="products">
                <h1 className="lookAtMe">{t('Look at me')}</h1>
            </div>
            <AllCategories/>
            <Cart/>
            <Products/>

        </div>
    )
}

export default Makeup;