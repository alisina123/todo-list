import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import './component/Footer';
import Home from  './Home';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">

      <div className='container'>
        <Header />
        
        <Home/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
