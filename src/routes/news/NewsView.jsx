import {useParams} from "react-router-dom";
import {useArticle} from "../../hooks/articleHooks.js";
import RecentPosts from "../../components/news/RecentPosts.jsx";
import Categories from "../../components/news/Categories.jsx";
import moment from "moment";
import News from "../../components/News.jsx";

const NewsView = () => {
    
    const { id } = useParams()
    
    const {data, isPending} = useArticle(id)
    
    
    if (isPending)
        return (
            <div>Loading...</div>
        )
    
    return (
        <div className="news-view">
            <div className="container">
                <div className="news-header">
                    <h2>{data.title}</h2>
                    <div className="info">
                        <p>{moment(data.published).format("MMM DD, YYYY")}</p> <div className="dot"></div> <p>{data.category}</p> <div className="dot"></div> <p>{data.author}</p>
                    </div>
                </div>
                
                <div className="content">
                    <div className="article">
                        <img src={data.imageUrl} alt="" />
                        
                        <p>{data.content}</p>
                    </div>
                    <div className="sidebar">
                        <div className="search-bar">
                            <input type="text" placeholder="Type to search..."/>
                            
                        </div>
                        <RecentPosts count={4}/>
                        <Categories />
                    </div>
                </div>
            </div>
        
            <div className="more-news">
                <News />
            </div>
                
        </div>
    )
}

export default NewsView