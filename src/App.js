import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
