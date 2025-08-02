
import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import More from './components/More';
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <HeroSection/>
      </div>

      <div className="">
        <About/>
      </div>

      <div className="">
        <More/>
      </div>

      <div className="">
        <Footer/>
      </div>
    </>
  );
}

export default App
