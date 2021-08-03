import React from 'react';
import{NavLink} from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
        <div className="Container-flud nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                
      <nav className="navbar navbar-expand-lg navbar-light ">
  <NavLink className="navbar-brand" to="/">Techno</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink activeClassName='menu_active' exact className="nav-link" to="/">Home  </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/service">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
      </li>
      
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    
  </div>
</nav>
</div>
                </div>
            </div>

        </>
    );
};

export default Navbar;