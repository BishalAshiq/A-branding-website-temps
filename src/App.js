import './App.css';
import Accordions from './Components/Accordion/Accordions';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import Navigation from './Components/Shared/Navigation';
function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Banner></Banner>
     <Services></Services>
     <Accordions></Accordions>
    </div>
  );
}

export default App;
