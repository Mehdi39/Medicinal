import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import './App.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
    {/* using react router v.6 */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
