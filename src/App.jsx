
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <div id="app">
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}


export default App;
