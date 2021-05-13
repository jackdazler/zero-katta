import GamePage from './components/gamePageComponent';
import LoginPage from './components/loginComponet';
import ErrorPage from './components/errorPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
 

  return (
    <div className="App">
     <Router>
     <Switch> 
      <Route path= '/login' component ={LoginPage} exact></Route>
      <Route  path = '/'component= {GamePage}exact >
      </Route>
      <Route component ={ErrorPage}></Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
