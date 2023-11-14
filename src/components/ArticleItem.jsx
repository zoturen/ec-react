import {Link} from "react-router-dom";

const ArticleItem = ({id, image, tag, label, description}) => {
    return (
        <Link to={`/news/${id}`} className="article-item">
            <img src={image} alt="girl is happy on a chair" />
            <p className="tag">{tag}</p>
            <h4>{label}</h4>
            <p>{description}</p>
        </Link>
    )
}

export default ArticleItem