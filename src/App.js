import TopBar from "./compenents/topbar/TopBar";
// import Home from "./pages/home/Home";
import Header from "./compenents/header/Header";
import Post from "./compenents/post/Post";
import Single from "./pages/single/Single";
// import SinglePost from "./compenents/singlepost/SinglePost";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import CarouselContainer from "./compenents/CarouselContainer";
import Cards from './cards/Cards';



function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
          <Route exact path="/">
            <Header />
            {/* <Home /> */}
            <CarouselContainer />
          </Route>
        {/* <Route path="/">
          <Products />
        </Route> */}
        <Route exact path="/singlePost">
          <Single />
        </Route>
        { <Route exact path="/">
          <Single />
        </Route> }
      </Switch>
      {/* { <Post /> } */}
      { <Cards /> }
    </Router>
  );
}

export default App;
