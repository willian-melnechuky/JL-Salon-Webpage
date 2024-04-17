import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {

  return (
    <>
      <Header page="Home"/>
      <main>
        <Hero/>
        <Services/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
