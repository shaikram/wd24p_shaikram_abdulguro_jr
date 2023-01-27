import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Home from'../pages/Home';
  import Feature from'../pages/Feature';
  import Pricing from'../pages/Pricing';
  import Employee from'../pages/Employee';

 

function Navigation() {

    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/feature">Features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/pricing">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/employee">Employee</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-success" type="submit">Logout</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/feature" element={<Feature />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/employee" element={<Employee />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Navigation;