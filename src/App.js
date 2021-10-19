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

function App() {
  return (
    <div className="App">
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
          <Route path="/our-services">
            <OurService></OurService>
          </Route>
          <Route path="/our-doctors">
            <OurDoctors></OurDoctors>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
