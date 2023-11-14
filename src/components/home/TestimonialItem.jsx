const TestimonialItem = ({starCount, rateText, image, name, title}) => {
    
    const stars = (count) => {
        let starElements = []
        for (let i = 0; i < count; ++i) {
            starElements.push(<i className="fa-solid fa-star"></i>)
        }
        
        return starElements
    }
    return (
        <div className="testimonial-item">
            <div className="stars">
                {stars(starCount)}
            </div>
            <p className="rate-text">"{rateText}"</p>
            <div className="who">
                <img src={image} alt="cassandra warred" />
                <div>
                    <h6>{name}</h6>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem