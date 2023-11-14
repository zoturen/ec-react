import {createContext, useContext, useState} from "react";

const CategoryContext = createContext()

export const useCategories = () => useContext(CategoryContext)

export const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([
        {
            category: "Technology",
            postCount: 20
        },
        {
            category: "Freelancing",
            postCount: 7
        },
        {
            category: "Writing",
            postCount: 16
        },
        {
            category: "Marketing",
            postCount: 11
        },
        {
            category: "Business",
            postCount: 35
        },
        {
            category: "Education",
            postCount: 14
        },
    ])
    
    return (
        <CategoryContext.Provider value={{categories}}>
            {children}
        </CategoryContext.Provider>
    )
}