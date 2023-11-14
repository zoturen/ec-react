import Christina from "../../assets/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
import Itay from "../../assets/images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg"
import Christina2 from "../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg"
import Justin from "../../assets/images/justin.png"
import Cassandra from "../../assets/images/cassandra.png"
import Amanda from "../../assets/images/amanda.png"
import Jack from "../../assets/images/jack.png"
import TeamMember from "./TeamMember.jsx";
import TestimonialItem from "./TestimonialItem.jsx";

const Team = () => {

    const dots = (count) => {
        let dotElements = []
        for (let i = 0; i < count; ++i) {
            dotElements.push(<div className="dot"></div>)
        }

        return dotElements
    }

    return (
        <section className="team">
            <div className="container">
                <h6>Meet Our Team</h6>
                <div className="top-bar">
                    <h2>Experience Team Members</h2>
                    <a href="" className="button button-primary">Browse Team <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="team-members">
                    <TeamMember image={Christina} name="Kristine Palmer" title="Chef Operation Officer"/>
                    <TeamMember image={Itay} name="Mark Aubri" title="Senior Consultant"/>
                    <TeamMember image={Christina2} name="Kimberly Hansen" title="Senior Consultant"/>
                    <TeamMember image={Justin} name="Justin Willoman" title="Senior Tech Consultant"/>
                </div>
                <div className="dots">
                    {dots(5)}
                </div>
            </div>

            <div className="testimonial">
                <div className="container">
                    <h6>Testimonial</h6>
                    <h2>What Our Client Says</h2>
                    <div className="testimonial-items">
                        <TestimonialItem starCount={5} rateText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" image={Cassandra} name="Cassandra Warren" title="Business Manager, Dorfus" />

                        <TestimonialItem starCount={5} rateText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" image={Amanda} name="Amanda Tulling" title="Senior Developer, Square" />

                        <TestimonialItem starCount={5} rateText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" image={Jack} name="Jack McDogglas" title="Key Account Manager, Gobona" />
                    </div>
                    <a href="" className="button button-black">All Reviews <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Team