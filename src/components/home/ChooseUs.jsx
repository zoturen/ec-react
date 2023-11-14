import AmyHirshi from "../../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg"

const ChooseUs = () => {
    return (
        <section className="choose-us">
            <div className="container">
                <div className="why-us">
                    <h6>Why Choose Us</h6>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                    <ul>
                        <li>
                            <span><i className="fa-regular fa-thumbs-up"></i></span>
                            <div>
                                <h4>Process Excellence</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </li>
                        <li>
                            <span><i className="fa-regular fa-gem"></i></span>
                            <div>
                                <h4>Strategic Planning</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </li>
                        <li>
                            <span><i className="fa-solid fa-wand-magic-sparkles"></i></span>
                            <div>
                                <h4>Experience Design</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </li>
                        <li>
                            <span><i className="fa-solid fa-brain"></i></span>
                            <div>
                                <h4>Artificial Intelligence</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <img src={AmyHirshi} alt="two women discussing and using an ipad" />
            </div>
            <div id="green-bg-behind"></div>
        </section>
    )
}

export default ChooseUs