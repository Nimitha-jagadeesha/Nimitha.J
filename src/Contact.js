export default function Contact() {
    return (
        <div className="Contact" id="Contact" >
            <br />
            <h3 className="text-center">🤳 Connect with me</h3>
            <br />
            <br />
            <div className="row">
                <a href="mailto:nimithajemail@gmail.com" className="col-1 offset-2" data-aos="zoom-in" data-aos-duration="2000">
                    <img src={process.env.PUBLIC_URL + "gmail.png"} height={50} width={50} />
                </a>
                <a href="https://github.com/Nimitha-jagadeesha" className="col-1 offset-1" data-aos="zoom-in" data-aos-duration="2000">
                    <img src={process.env.PUBLIC_URL + "github.png"}  height={50} width={50}/>
                </a>
                <a href="https://www.linkedin.com/in/nimitha-jagadeesha/" className="col-1 offset-1" data-aos="zoom-in" data-aos-duration="2000">
                    <img src={process.env.PUBLIC_URL + "linkedin.png"} height={50} width={50} />
                </a>
                <a href="https://twitter.com/Nimitha__J" className="col-1 offset-1" data-aos="zoom-in" data-aos-duration="2000">
                    <img src={process.env.PUBLIC_URL + "twitter.png"}  height={50} width={50} />
                </a>
            </div>
            <br />
            <br />
        </div>
    )
}