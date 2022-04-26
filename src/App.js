import './App.css';
import Accordion from './Components/Accordion/Accordion';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import Navigation from './Components/Shared/Navigation';
function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Banner></Banner>
     <Services></Services>
     {/* <Accordion></Accordion> */}
    </div>
  );
}

export default App;
