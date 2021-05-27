import Home from "./components/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Projects from "./components/Projects";
import Code from "./components/Code";
import Navigation from "./components/Navigation";
import { useContext } from "react";
import { ThemeStore } from "./components/ThemeContext";

function App() {
  const [theme, setTheme] = useContext(ThemeStore)
  return (
    <div className={theme ? 'dark-theme' : 'light-theme'}>
    <BrowserRouter>
    <Navigation />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/projects' exact>
          <Projects />
        </Route>
        <Route path='/code' exact>
          <Code />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
