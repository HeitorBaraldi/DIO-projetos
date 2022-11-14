import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Cadastro } from './pages/cadastro'

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
     </Routes >
    </Router>
  );
}

export default App;
