import { t } from "i18next";
import Cart from "./Cart/Cart";
import AllCategories from "./Filter/AllCategories";
import Products from "./ProductsComponents/Products";
import SearchProducts from "./SearchProducts";

function Makeup() {

    return(
        <div>
            <div className="products">
                <h1 className="lookAtMe">{t('Look at me')}</h1>
            </div>
            <AllCategories/>
            <SearchProducts/>
            <Cart/>
            <Products/>

        </div>
    )
}

export default Makeup;