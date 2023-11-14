import BackgroundLines from "../../assets/images/background-lines-right.svg"
import ServiceItem from "./ServiceItem.jsx";

const Services = () => {
    return (
        <section className="services">
            <img id="service-lines" src={BackgroundLines} alt="background lines" />
            <div className="container">
                <h6>Our Services</h6>
                <h2>We Provide The Best <br/>Service For Consulting</h2>
                <div className="service-section">
                    <ServiceItem title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                    <ServiceItem title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                    <ServiceItem title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                    <ServiceItem title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                </div>
                <div id="browse-button">
                    <a className="button button-inverse" href="#">Browse Services <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Services