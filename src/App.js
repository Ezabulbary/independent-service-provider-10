import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Checkout from './pages/Checkout/Checkout';
import Artists from './pages/Home/Artists/Artists';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/artists' element={<Artists></Artists>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
