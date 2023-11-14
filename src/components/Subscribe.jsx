import BackgroundWavy from "../assets/images/background-wavy-lines.svg"

const Subscribe = () => {
    return (
        <section className="subscribe">
            <div className="container">
                <img src={BackgroundWavy} alt="" />
                <h2>Get News Updates By Signup</h2>
                <form className="form" action="#" method="">
                    <input type="text" placeholder="username@domain.com" required />
                    <button type="submit" className="button button-primary">Subscribe <i className="fa-solid fa-arrow-right"></i></button>
                </form>
            </div>
        </section>
    )
}

export default Subscribe