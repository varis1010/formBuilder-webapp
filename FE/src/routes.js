import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import CreateForm from './Pages/CreateForm';
import LoggedInLayout from './components/layout/LoggedInLayout'
import PreviewForm from './Pages/PreviewForm'

const Routes = () => {
  const unAuthorizedRoutes = [
    <Route  path="/" key='dashboard' component={Dashboard} exact />, 
    <Route  path="/question/:id/preview" key='dashboard' component={PreviewForm} exact />,
    <Route  path="/create-form" key='createForm' component={CreateForm} exact />, 
  ];

  return (
    <Router>
      <LoggedInLayout>
      <Switch>
        {unAuthorizedRoutes.map(r => r)}
      </Switch>
      </LoggedInLayout>
    </Router>
  )
}

export default Routes;
