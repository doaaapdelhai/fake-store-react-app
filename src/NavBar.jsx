// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to={'/'}  className="navbar-brand" href="#">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link to={'/'} className="nav-link" href="#">
                 Home
                   <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  
