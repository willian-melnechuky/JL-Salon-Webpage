import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx'
//import CoreConcepts from './components/CoreConcepts.jsx';
//import Services from './components/Services.jsx';

function App() {
  

  return (
    <>
      <Header page="Home"/>
      <main>
        <Hero/>
        {/* <CoreConcepts/>
        <Services/> */}
      </main>
    </>
  );
}

export default App;
