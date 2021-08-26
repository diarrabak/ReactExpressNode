import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/template/header";
import Footer from "./components/template/footer";
import Home from "./components/template/home";
import Error from "./components/template/error";
import Contact from "./components/template/contact";
import Research from "./components/template/research";
import GroupList from "./components/groups/groupList";
import CreateGroup from "./components/groups/createGroup";
import UpdateGroup from "./components/groups/updateGroup";
import ShowGroup from "./components/groups/showGroup";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/research">
          <Research />
        </Route>

        <Route path="/researchers">
          <Contact />
        </Route>
        <Route path="/groups">
          <GroupList />
        </Route>

        <Route path="/addGroup">
          <CreateGroup />
        </Route>

        <Route path="/group/:id">
          <UpdateGroup />
        </Route>

        <Route path="/showGroup/:id">
          <ShowGroup />
        </Route>

        <Route path="/articles">
          <Contact />
        </Route>

        <Route path="/studies">
          <Research />
        </Route>

        <Route path="/doctorate">
          <Contact />
        </Route>
        <Route path="/masters">
          <Contact />
        </Route>
        <Route path="/careers">
          <Contact />
        </Route>

        <Route path="/careers">
          <Contact />
        </Route>

        <Route path="/internships">
          <Contact />
        </Route>

        <Route path="/phd-positions">
          <Contact />
        </Route>
        <Route path="/postdocs">
          <Contact />
        </Route>
       
        <Route path="/other-positions">
          <Contact />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
