import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import home from './pages/home';
import errorNotFound from './pages/404error';
import about from './pages/about';


const App = () => {
    return (
        <BrowserRouter>
            <div className="navigation">
                <Switch>
                    <Route path="/" exact component={home} />          
                    <Route path="/a-propos" exact component={about} />
                    <Route component={errorNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
