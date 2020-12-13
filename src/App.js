
import './App.css';
import Home from './Containers/Home/home'
import { Route, Switch, Redirect } from 'react-router-dom'
import Fav from './Containers/Favourites/Favourites'
import Details from './Containers/Details/Details'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/favourites" component={Fav} />
        <Route path="/details" component={Details} />
        <Route exact path="/" component={Home} />
        <Route component={Home} />

      </Switch >
    </div >
  );
}

export default App;