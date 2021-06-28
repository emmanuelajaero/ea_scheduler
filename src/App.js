import { Route, Switch } from 'react-router-dom';

import routes from './routes/routes';



function App() {
  return (
    <>
      <Switch>
        {
          routes.map((route, index) => <Route key={index} path={route.route} exact><route.layout><route.component></route.component></route.layout></Route>)
        }
      </Switch>
    </>
  );
}

export default App;
