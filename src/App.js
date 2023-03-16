import ContactUs from './views/ContactUs'
import OperatingSystem from './components/OperatingSystem';
import Hero from './views/Hero';
import Nav from './views/Nav';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Works from './components/Works';
import About from './views/About';
import Footer from './views/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Tech />
      <OperatingSystem />
      <Experience />
      <Works />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
