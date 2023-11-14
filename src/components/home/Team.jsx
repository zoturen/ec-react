import Christina from "../../assets/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg"
import Itay from "../../assets/images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg"
import Christina2 from "../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg"
import Justin from "../../assets/images/justin.png"
import Cassandra from "../../assets/images/cassandra.png"
import Amanda from "../../assets/images/amanda.png"
import Jack from "../../assets/images/jack.png"
import TeamMember from "./TeamMember.jsx";

const Team = () => {
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
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>

            <div className="testimonial">
                <div className="container">
                    <h6>Testimonial</h6>
                    <h2>What Our Client Says</h2>
                    <div className="testimonial-items">
                        <div className="testimonial-item">
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p className="rate-text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <div className="who">
                                <img src={Cassandra} alt="cassandra warred" />
                                <div>
                                    <h6>Cassandra Warren</h6>
                                    <p>Business Manager, Dorfus</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p className="rate-text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <div className="who">
                                <img src={Amanda} alt="amanda" />
                                <div>
                                    <h6>Amanda Tulling</h6>
                                    <p>Senior Developer, Square</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p className="rate-text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <div className="who">
                                <img src={Jack} alt="jack" />
                                <div>
                                    <h6>Jack McDogglas</h6>
                                    <p>Key Account Manager, Gobona</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" className="button button-black">All Reviews <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Team