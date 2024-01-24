function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-secondary d-flex justify-content-around">
            <div className="container-fluid">
                <a className="navbar-brand" href="./index.html">
                    <img src="./logo-nav.webp" alt="logo" className="logo " />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#landing">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                Sobre Nosotros
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#service">
                                Servicios
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar