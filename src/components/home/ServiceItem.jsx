const ServiceItem = ({title, description}) => {
    return (
        <a className="service-item" href="#">
            <div className="line"></div>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="right">
                <span className="button button-black"><i className="fa-solid fa-arrow-right"></i></span>
            </div>
        </a>
    )
}

export default ServiceItem