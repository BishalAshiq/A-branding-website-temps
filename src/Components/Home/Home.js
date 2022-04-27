import React from 'react';
import Accordions from './Components/Accordion/Accordions';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
     <Services></Services>
     <Accordions></Accordions>
     <Contact></Contact>
        </div>
    );
};

export default Home;