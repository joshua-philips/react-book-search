import './App.css';
import Search from './Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './Details';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search></Search>;
        </Route>
        <Route exact path="/:key">
          <Details></Details>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
