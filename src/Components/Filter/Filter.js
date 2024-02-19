import { useDispatch } from "react-redux";
import { filterCategory } from "../../redux/productSlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    return (
        <div className="cont products">
            <p onClick={() => {dispatch(filterCategory(category))}} className="change">{category}</p>
        </div>
    )
}

export default Filter;