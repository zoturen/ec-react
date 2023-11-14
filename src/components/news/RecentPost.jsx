import moment from "moment";
import {Link} from "react-router-dom";

const RecentPost = ({title, date, id}) => {
    return (
        <div className="recent-post">
            <Link to={`/news/${id}`}><h6>{title}</h6></Link>
            <p>{moment(date).format("MMM DD, YYYY")}</p>
        </div>
    )
}

export default RecentPost