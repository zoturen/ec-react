import ArticleContainer from "./ArticleContainer.jsx";
import {Link} from "react-router-dom";


const News = () => {
    return (
        <section className="news container">
            <h6>Article & News</h6>
            <div className="top-bar">
                <h2>Get Every Single Articles & News</h2>
                <Link to="/news" className="button button-inverse">Browse Articles <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <ArticleContainer count={3} />
            <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </section>
    )
}

export default News