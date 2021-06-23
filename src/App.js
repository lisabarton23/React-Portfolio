import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Nav';
import Project from './components/Project'
function App() {
  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
    <Project/>
     <Footer/>
</div>
  );
}

export default App;
