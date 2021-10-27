
import {Switch, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddProducts from './components/addProduct/AddProducts';
import Home from './components/homePage/Home';
import HomeAdmin from './components/homePage/HomeAdmin';
import HomePage from './components/homePage/HomePage';
import ManageUsersList from './components/manageUsersList/ManageUsersList';
import PrivateRoute from './components/privateRoutes/PrivateRoute';
import Product from './components/product/Product';
import SignInSide from './components/signin/SignInSide';
import SignUp from './components/signup/SignUp';
import UpdateProduct from './components/updateProduct/UpdateProduct';
import AdminProduct from './components/product/AdminProduct';
import CartClient from './components/cartClient/CartClient';
import Profle from './components/profile/Profle';

function App() {
  return (
    <div className="App">
      
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/homeclient" component={HomePage} />
      <Route exact path="/home" component={HomeAdmin} />
      <Route exact path="/adminproduct" component={AdminProduct} />
        <Route exact path="/loggin" component={SignInSide} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/addprod" component={AddProducts} />
        <Route exact path="/updateprod/:id" component={UpdateProduct} />
        <Route exact path="/manageusers" component={ManageUsersList} />
        <Route exact path="/cart" component={CartClient} />
        <PrivateRoute path="/product" component={Product} />
        <PrivateRoute path='/profile' component={Profle} />
      </Switch>
    </div>
  );
}

export default App;
