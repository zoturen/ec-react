const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="feature-slogan">
                    <h6>Features</h6>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    <a href="#" className="button button-primary">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="feature-items">
                    <div className="feature-item">
                        <i className="fa-regular fa-handshake"></i>
                        <h4>Business Advice</h4>
                        <p>Lorem Ipsum, dolor sit amet consectetur adipsisict elit.</p>
                    </div>
                    <div className="feature-item">
                        <i className="fa-regular fa-lightbulb"></i>
                        <h4>Startup Business</h4>
                        <p>Lorem Ipsum, dolor sit amet consectetur adipsisict elit.</p>
                    </div>
                    <div className="feature-item">
                        <i className="fa-solid fa-chart-line"></i>
                        <h4>Financial Advice</h4>
                        <p>Lorem Ipsum, dolor sit amet consectetur adipsisict elit.</p>
                    </div>
                    <div className="feature-item">
                        <i className="fa-solid fa-box"></i>
                        <h4>Risk Management</h4>
                        <p>Lorem Ipsum, dolor sit amet consectetur adipsisict elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features