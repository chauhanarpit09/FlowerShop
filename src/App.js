
import './App.css';
import Header from './Components/Header'
import Banner from './Components/Banner'
import CustomerCount from './Components/CustomerCount'
import Products from './Components/Products'
import Services from './Components/Services'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <CustomerCount/>
      <Products/>
      <Services />
      <Reviews />
      <Footer/>
    </div>
  );
}

export default App;
