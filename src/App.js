import { useContext } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Intro from './Components/Introduction/Intro';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ThemeContext } from './Context';
import Ecommerce from './Components/Ecommerce';
import Social from './Components/Social';
import Food from './Components/Food';
import Blog from './Components/Blog';

// import { ThemeProvider } from './Context';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    // <ThemeProvider>
    <Router>
       <div className="App" style={{backgroundColor: darkMode ? "#222" : "white", color:darkMode &&"white"}} >
       <Navbar />
      {/* <Intro />
      <About />
      <Product />
      <ProductList />
      <Contact /> */}
       <Routes>
     <Route exact path="/" element={<Intro />} />
     <Route path="/projects" element={<Product />} />
     <Route path="/about" element={<About />} />
     <Route path="/projects" element={<Product />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/projects/ecommerce" element={<Ecommerce />} />
     <Route path="/projects/social" element={<Social />} />
     <Route path="/projects/food" element={<Food />} />
     <Route path="/projects/blog" element={<Blog />} />

    
     





      
       </Routes>
      <Footer />

      
    </div>
    </Router>
   
    // </ThemeProvider>
  );
}

export default App;
