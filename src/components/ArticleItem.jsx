import {Link} from "react-router-dom";
import moment from "moment";

const ArticleItem = ({id, image, tag, label, description, date}) => {
    return (
        <Link to={`/news/${id}`} className="article-item">
            <div className="date">{moment(date).format("DD MMM")}</div>
            <img src={image} alt="girl is happy on a chair" />
            <p className="tag">{tag}</p>
            <h4>{label}</h4>
            <p>{description}</p>
        </Link>
    )
}

export default ArticleItem