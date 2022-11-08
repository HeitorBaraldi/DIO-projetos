import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Feed} from './pages/Feed'
import { Teste } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/teste' element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
