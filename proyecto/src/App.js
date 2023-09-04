import {Switch, Route} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./screens/NotFound/NotFound";
import Home from './screens/Home/Home'

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  );
}
 

export default App;