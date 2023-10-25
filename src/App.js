import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Langingpage from './pages/Langingpage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Langingpage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
