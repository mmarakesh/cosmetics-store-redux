import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/productSlice";
import { useTranslation } from "react-i18next";

const Filter = ({category}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory)

    return (
        <div className="cont products">
            <p onClick={() => {dispatch(filterCategory(category))}} 
            className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
                {t(category)}
            </p>
        </div>
    )
}

export default Filter;