import './Navbar.css';
import {Link } from "react-router-dom";

function Navbar() {

  return (
    <div class="navbar">
      <nav class="navbar  navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active bold-link" aria-current="page" to="/home" style={{ color: 'white' }}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          
    </div>
  );
}

export default Navbar;
