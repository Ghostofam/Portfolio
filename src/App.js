import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Routes>
      <Route path='/Portfolio' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/Portfolio/about' element={<About />} />
        <Route path='/Portfolio/contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
