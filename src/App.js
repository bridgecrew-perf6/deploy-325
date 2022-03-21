import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import {Navbar} from "../src/navbar/navbar.jsx";
import {Book} from "./books";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Book/>}/>
        <Route path = "/section:section" element = {"Section"}/>
        <Route path = "/section:id" element = {"Section"}/>
        <Route path = "*" element = {"Page not Found"}/>

      </Routes>
    </div>
  );
}

export default App;
