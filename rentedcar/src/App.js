import './App.css';
import Aboutsection from './Rented4u-template/Aboutsection';
import Bestsection from './Rented4u-template/Bestsection';
import BlogSection from './Rented4u-template/BlogSection';
import Booksection from './Rented4u-template/Booksection';
import Carsection from './Rented4u-template/Carsection';
import Clintsection from './Rented4u-template/Clintsection';
import Contactsection from './Rented4u-template/Contactsection';
import Contactus from './Rented4u-template/Contactus';
import Footer from './Rented4u-template/Footer';
import Header from './Rented4u-template/Header';
import Mapsection from './Rented4u-template/Mapsection';
import Rentsection from './Rented4u-template/Rentsection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Booksection/>
      <Carsection/>
      <Aboutsection/>
      <Bestsection/>
      <Rentsection/>
      <BlogSection/>
      <Contactus/>
      <Clintsection/>
      <Contactsection/>
      <Mapsection/>
      <Footer/>
    </div>
  );
}

export default App;
