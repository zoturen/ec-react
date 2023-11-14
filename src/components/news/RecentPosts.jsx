import {useArticles} from "../../hooks/articleHooks.js";
import RecentPost from "./RecentPost.jsx";

const RecentPosts = ({count}) => {
    
    const {data, isPending} = useArticles(count)
    
    
    if (isPending)
        return (
            <>Loading...</>
        )
    
    return (
        <div className="recent-posts">
            <h4>Recent posts</h4>
            {data.map(item => (
                <RecentPost key={item.id} title={item.title} date={item.published} id={item.id} />
            ))}
        </div>
    )
}

export default RecentPosts