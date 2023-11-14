import BackgroundLines from "../../assets/images/background-lines.svg"

import Breadcrumbs from "../Breadcrumbs.jsx";

const Description = ({ description}) => {
    
    
    return (
        <section className="description">
            <img src={BackgroundLines} alt="lines in the bottom left corner" />
            <Breadcrumbs />
            <h1>{description}</h1>
        </section>
    )
}

export default Description