import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OurBlog from './Pages/OurBlog/OurBlog';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Career from './Pages/Career/Career';
import OurService from './Pages/OurService/OurService';
import OurDoctors from './Pages/OurDoctors/OurDoctors';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking/Booking';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/our-blog">
              <OurBlog></OurBlog>
            </Route>
            <Route path="/careers">
              <Career></Career>
            </Route>
            <PrivateRoute path="/our-services">
              <OurService></OurService>
            </PrivateRoute>
            <PrivateRoute path="/our-doctors">
              <OurDoctors></OurDoctors>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
