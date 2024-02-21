import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="cont">
            {['eye', 'lip', 'face', 'cheek', 'all'].map(category => 
            <Filter category={category} key={category.searchTerm}/>)}
        </div>
    )
}

export default AllCategories;