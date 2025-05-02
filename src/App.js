import { Routes, Route } from 'react-router-dom';

import NavBar from './routes/nav-bar/nav-bar.component';
import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component';

const Shop = () => (
  <h1>Shop</h1>
);

const App = () => (
  <Routes>
    <Route path='/' element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/auth' element={<Authentication />} />
    </Route>
  </Routes >
);

export default App;
