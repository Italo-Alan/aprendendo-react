import Button from "./components/Button";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/login" element ={<Login/>}/>
      </Routes>
    </Router>




    // <div className="App">
    //   <h1>
    //     Olá, mundo!
    //   </h1>
    //   <Button title="Entrar"/>
    //   <Button title="Sair"/>
    //   <Button title="Fechar"/>
    //   <Button title="Salvar"/>
    // </div>
  );
}

export default App;
