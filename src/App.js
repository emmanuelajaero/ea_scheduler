import { useEffect } from 'react'
import { addWorkOrder, refreshWorkOrders } from './store/actions/work-orders'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom';

import routes from './routes/routes';



const initialWorkOrders = [
  {
    "id": Date.now(),
    "title": "one",
    "detail": "Descrip the task here",
    "start_date": Date.now(),
    "duration": 2.5,
    "state": true, //true: still active false: done
  },
  {
    "id": Date.now(),
    "title": "one",
    "detail": "Descrip the task here",
    "start_date": Date.now(),
    "duration": 2.5,
    "state": false, //true: still active false: done
  },
]




function App() {
  const { workOrders } = useSelector(state => state.workOrders)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshWorkOrders(initialWorkOrders));


    dispatch(addWorkOrder(  {
      "id": "Date.now()",
      "title": "one",
      "detail": "Descrip the task here",
      "start_date": Date.now(),
      "duration": 3.5,
      "state": false, //true: still active false: done
    }));
    



  }, [])


  console.log("workOrders :> ", workOrders);

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
