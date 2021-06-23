
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Nav';
import Project from './components/Project';
import About from './components/About';

function App() {
  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
      <About/>
    <Project/>
     <Footer/>
</div>
  );
}

export default App;
