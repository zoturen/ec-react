const FeatureItem = ({icon, title, description}) => {
    return (
        <div className="feature-item">
            <i className={icon}></i>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default FeatureItem