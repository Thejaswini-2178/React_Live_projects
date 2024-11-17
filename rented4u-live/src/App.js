import './App.css';

import  Contact  from './Components/Contact';
import Cars from './Components/Cars';
import Blog from './Components/Blog';
import Header  from './Components/Header';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/blog' element={<Blog/>}/>
     <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;
