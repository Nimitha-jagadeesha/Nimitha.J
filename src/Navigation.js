export default function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <img src={process.env.PUBLIC_URL + "favicon.png"} height={30} alt="Dream->code->Achieve" />
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    <a href="#Intro" class="nav-item nav-link active">Introduction</a>
                    <a href="#Projects" class="nav-item nav-link active">Projects</a>
                    <a href="#Contact" class="nav-item nav-link active">Contact</a>
                </div>
            </div>
        </div>
    </nav>
    )
}