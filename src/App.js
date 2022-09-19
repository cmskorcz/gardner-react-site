import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navigation from './components/Navigation.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Products from './pages/Products.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
