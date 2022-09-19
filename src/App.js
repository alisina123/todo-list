import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import './component/Footer';
import Home from './Home';
import Footer from './component/Footer';
import Create from "./Create";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Details from './Details';
import Update from './Update';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" href="#"><Link to="/">Home</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><Link to="create">Create</Link></a>
                </li>
                
               
              </ul>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="create" element={<Create />} />
            <Route exact path="details/:id" element={<Details />} />
            <Route exact path="update/:id" element={<Update />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
export default App;
