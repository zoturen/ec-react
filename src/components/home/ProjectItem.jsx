const ProjectItem = ({image, title}) => {
    return (
        <div className="project-item">
            <a href="#">
                <img src={image} alt="man holding a paper" />
                <h4>{title}</h4>
                <div><p>Read More <i className="fa-solid fa-arrow-right"></i></p></div>
            </a>
        </div>
    )
}

export default ProjectItem