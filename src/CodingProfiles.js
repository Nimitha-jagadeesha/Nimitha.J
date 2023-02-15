export default function CodingProfiles() {
    return (
        <div className="Coding" data-aos="fade-up" data-aos-duration="2000">
            <br />
            <h3 className="text-center">Coding Profiles</h3>
            <br />
            <br />
            <div className="row">
                <a href="https://www.hackerrank.com/nimithajagadees" target="_blank" className="col-1 offset-2">
                    <img src={process.env.PUBLIC_URL + "hackerrank.png"} height={50} width={50} />
                </a>
                <a href="https://auth.geeksforgeeks.org/user/nimitha1jagadeesha/" target="_blank" className="col-1 offset-1">
                    <img src={process.env.PUBLIC_URL + "geeks.png"}  height={50} width={50}/>
                </a>
                <a href="https://leetcode.com/Nimitha_J/" target="_blank" className="col-1 offset-1">
                    <img src={process.env.PUBLIC_URL + "leetcode.webp"} height={50} width={50} />
                </a>
                <a href="https://www.codechef.com/users/nimitha1j" target="_blank" className="col-1 offset-1">
                    <img src={process.env.PUBLIC_URL + "codechef.png"}  height={50} width={50} />
                </a>
            </div>
            <br />
            <br />
        </div>
    )
}