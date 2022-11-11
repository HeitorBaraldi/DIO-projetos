import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Login } from './pages/login'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/login" element={<Login />} />

     </Routes >
    </Router>
  );
}

export default App;
