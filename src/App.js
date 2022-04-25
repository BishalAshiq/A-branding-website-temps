import './App.css';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import Navigation from './Components/Shared/Navigation';
function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Banner></Banner>
     <Services></Services>
    </div>
  );
}

export default App;
