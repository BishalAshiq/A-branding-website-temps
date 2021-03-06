import './App.css';
import Accordions from './Components/Accordion/Accordions';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Footer from './Components/Shared/Footer';
import Navigation from './Components/Shared/Navigation';
function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Banner></Banner>
     <Services></Services>
     <Accordions></Accordions>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
