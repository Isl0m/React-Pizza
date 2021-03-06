import { Routes, Route } from 'react-router-dom';
import { Home, Cart } from './pages';
import { Header } from './components';

import './scss/app.scss';
import './App.css';

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
