import { useEffect } from 'react'
import { addWorkOrder, refreshWorkOrders } from './store/actions/work-orders'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Walkthrough from './pages/walkthrough';



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
    <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/walkthrough" exact><Walkthrough /></Route>
    </Switch>
  );
}

export default App;
