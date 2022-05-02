import Header from '../src/pages/Shared/Header/Header';
import Footer from '../src/pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
