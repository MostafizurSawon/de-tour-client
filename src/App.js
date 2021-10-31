import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Register from './components/LoginAndRegistration/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css'
import About from './components/About/About';
import AddService from './components/Services/AddService';
import TakeService from './components/Services/TakeService';
import MyOrders from './components/Orders/MyOrders';
import AllOrders from './components/Orders/AllOrders';
import Dashboard from './components/Dashboard/Dashboard';
import Area from './components/Home/Area/Area';

function App() {
  return (
    <div className="container-fluid custom-default">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/services">
            <Area></Area>
          </Route> */}
          <PrivateRoute path="/add-service">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/all-orders">
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/services/:serviceId">
            <TakeService></TakeService>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;