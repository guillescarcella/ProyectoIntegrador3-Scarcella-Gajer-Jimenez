import {Switch, Route} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./screens/NotFound/NotFound";
import Home from './screens/Home/Home'
import Series from './screens/Series/Series'
import Peliculas from './screens/Peliculas/Peliculas'
import DetallePelicula from './screens/Detalle/DetallePelicula'
import DetalleSeries from './screens/Detalle/DetalleSeries'

function App() {

  return (
    <>
    <Header/>
    <Switch>
        <Route path="/" exact={true}component={Home} /> 
        <Route path="/detallePelicula/id/:id"  exact={true} component={DetallePelicula} />
        <Route path="/detalleSeries" exact={true} component={DetalleSeries} />
        <Route path="/favoritos" exact={true} component={Home} />
        <Route path="/home" exact={true} component={Home} />
        <Route path="/buscador" exact={true} component={Home} />
        <Route path="/series" exact={true} component={Series} />
        <Route path="/peliculas" exact={true} component={Peliculas} />
      </Switch>
    <Footer/>
    </>


  );
}
 

export default App;