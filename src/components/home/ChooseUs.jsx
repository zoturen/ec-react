import AmyHirshi from "../../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg"
import ChooseUsItem from "./ChooseUsItem.jsx";

const ChooseUs = () => {
    return (
        <section className="choose-us">
            <div className="container">
                <div className="why-us">
                    <h6>Why Choose Us</h6>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                    <ul>
                        <ChooseUsItem icon="fa-regular fa-thumbs-up" title="Process Excellence" description="Lorem, ipsum dolor sit amet consectetur."/>
                        <ChooseUsItem icon="fa-regular fa-gem" title="Strategic Planning" description="Lorem, ipsum dolor sit amet consectetur." />
                        <ChooseUsItem icon="fa-solid fa-wand-magic-sparkles" title="Experience Design" description="Lorem, ipsum dolor sit amet consectetur." />
                        <ChooseUsItem icon="fa-solid fa-brain" title="Artificial Intelligence" description="Lorem, ipsum dolor sit amet consectetur." />
                    </ul>
                </div>
                <img src={AmyHirshi} alt="two women discussing and using an ipad" />
            </div>
            <div id="green-bg-behind"></div>
        </section>
    )
}

export default ChooseUs