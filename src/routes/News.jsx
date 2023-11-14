import ArticleContainer from "../components/ArticleContainer.jsx";

const News = () => {
    return (
        <div className="news-articles container">
            <h2>Our News & Articles</h2>
            
            <ArticleContainer count={9}/>
        </div>
    )
}

export default News