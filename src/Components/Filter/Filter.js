import { useDispatch } from "react-redux";
import { filterCategory } from "../../redux/productSlice";
import { useTranslation } from "react-i18next";

const Filter = ({category}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    return (
        <div className="cont products">
            <p onClick={() => {dispatch(filterCategory(category))}} className="change">
                {t(category)}
            </p>
        </div>
    )
}

export default Filter;