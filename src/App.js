import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import './index.css';
import Header from './components/common/Header.js';
import PageNotFound from './components/PageNotFound';
import CoursesPage from './components/courses/CoursesPage';


function App() {
  return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
  );
}

export default App;
