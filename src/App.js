import TopBar from "./compenents/topbar/TopBar";
import Home from "./pages/home/Home";
import Post from "./compenents/post/Post";
import Single from "./pages/single/Single";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        {/* <Route path="/">
          <Products />
        </Route> */}
        <Route path="/single">
          <Single />
        </Route>
        {/* <Route path="/">
          <ContactUS />
        </Route> */}
      </Switch>
      {/* <Post /> */}
    </Router>
  );
}

export default App;
