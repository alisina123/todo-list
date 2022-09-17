import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Create from './Create';
import './component/Footer';
import Home from './Home';
import Footer from './component/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>

          <Header />
          <Home />


        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
