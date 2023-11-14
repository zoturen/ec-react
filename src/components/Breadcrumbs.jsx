import {NavLink, useMatches} from "react-router-dom";

const Breadcrumbs = () => {
    
    let matches = useMatches();
    let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));
    
    return (
        <div className="breadcrumb">
            {crumbs[0].map((crumb, index) => (
                <NavLink key={index} to={crumb.to}>{crumb.name}</NavLink>
                ))}
        </div>
    )
}

export default Breadcrumbs