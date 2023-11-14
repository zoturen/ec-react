import {useArticles} from "../hooks/articleHooks.js";
import ArticleItem from "./ArticleItem.jsx";

const ArticleContainer = ({count}) => {
    const {data, isPending} = useArticles(count)
    
    if (isPending) {
        return <span>Loading...</span>
    }
    
    
    return (
        <div className="article-items">
            {data.slice(0, count).map(item => (
                <ArticleItem key={item.id} id={item.id} image={item.imageUrl} tag={item.category} label={item.title} description={item.content} />
            ))} 
        </div>
    )
}

export default ArticleContainer