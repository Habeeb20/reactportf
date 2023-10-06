import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Contact  from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skilling from './components/Skilling';
import Projects from './components/Projects';
import ProjectCards from './components/ProjectCard';
import Footer  from './components/Footer';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <Skilling />
       <Projects />
       <Contact />
       <Footer />
      
       
      
    </div>
  );
}

export default App;
