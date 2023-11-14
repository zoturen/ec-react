import {useCategories} from "../../contexts/categoriesContext.jsx";


const Categories = () => {
    const {categories} = useCategories()
    
    return (
        <div className="categories">
            <h4>Categories</h4>
            {categories ? (
                <ul>
                    {categories.map((item, index) => (
                        <li key={index}>{item.category} - <span>{item.postCount} Posts</span></li>
                        ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Categories