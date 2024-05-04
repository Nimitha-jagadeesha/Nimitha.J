import Nimitha_J from './Nimitha_J.pdf'
export default function Introduction() {
    return (
        <div className="App" id="Intro">
            <div className="row">
                <div className='col-md-3 col-9 offset-2 offset-md-1' data-aos="zoom-in" data-aos-duration="2000">
                    <img src={process.env.PUBLIC_URL + "favicon.png"} height={300} alt="Dream->code->Achieve" />
                </div>
                <ul className="col-md-6 col-10 offset-1" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="text-center heading">Nimitha J  <span class="wave">🖐🏻</span> </h1>
                    <h5 className="tagline"> - Passinate Software Developer</h5>
                    <br />
                    <li>👀 I’m interested in solving complex problems, designing complex systems, learning different technologies and teckstacks.</li>
                    <li>🌱 I’m currently learning best coding practices and System design :)</li>
                    <li>✨ I am continually inspired by the limitless potential of software development to bring ideas to life.</li>
                    <li>☕ I enjoy coding while sipping on a cup of tea.</li>
                    <br />
                    <a href={Nimitha_J} download="Nimitha_J" target='_blank' className='offset-2 text-center btn btn-light'>
                        Download Resume
                    </a>
                </ul>
            </div>
        </div>
    )
}
