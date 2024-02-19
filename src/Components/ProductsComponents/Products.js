import { useSelector } from "react-redux";
import { dataProducts } from "../../data/dataProducts";
import ProductItem from "./ProductItem";
import { getSelectedCategory } from "../../redux/productSlice";

const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div className="products">
            {dataProducts
            .filter(everyItem => {
                if(selectedCategory === 'all') return true;
                return selectedCategory === everyItem.searchTerm;
            })
            .map(everyItem => <ProductItem everyItem = {everyItem} />)}
        </div>
    )
}

export default Products;