import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx'
import CoreConcepts from './components/CoreConcepts.jsx';
import Services from './components/Services.jsx';

function App() {
  

  return (
    <>
      <header>
        <Header page="Home"/>
      </header>
      <main>
        <Hero/>
        {/* <CoreConcepts/>
        <Services/> */}
      </main>
    </>
  );
}

export default App;
