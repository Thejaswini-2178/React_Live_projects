import './App.css';
import Aboutsection from './Renter cars-template/Aboutsection';
import Bestsection from './Renter cars-template/Bestsection';
import BlogSection from './Renter cars-template/BlogSection';
import Booksection from './Renter cars-template/Booksection';
import Carsection from './Renter cars-template/Carsection';
import Clintsection from './Renter cars-template/Clintsection';
import Contactsection from './Renter cars-template/Contactsection';
import Contactus from './Renter cars-template/Contactus';
import Footer from './Renter cars-template/Footer';
import Header from './Renter cars-template/Header';
import Mapsection from './Renter cars-template/Mapsection';
import Rentsection from './Renter cars-template/Rentsection';

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
