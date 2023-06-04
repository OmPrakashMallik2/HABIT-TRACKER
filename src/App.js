import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Home/>
      <Footer/> 
    </div>
  );
}

export default App;
