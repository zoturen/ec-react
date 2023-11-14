import FeatureItem from "./FeatureItem.jsx";

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
                    <FeatureItem icon="fa-regular fa-handshake" title="Business Advice"  description="Lorem Ipsum, dolor sit amet consectetur adipsisict elit."/>
                    <FeatureItem icon="fa-regular fa-lightbulb" title="Startup Business"  description="Lorem Ipsum, dolor sit amet consectetur adipsisict elit."/>
                    <FeatureItem icon="fa-solid fa-chart-line" title="Financial Advice"  description="Lorem Ipsum, dolor sit amet consectetur adipsisict elit."/>
                    <FeatureItem icon="fa-solid fa-box" title="Risk Management"  description="Lorem Ipsum, dolor sit amet consectetur adipsisict elit."/>
                </div>
            </div>
        </section>
    )
}

export default Features