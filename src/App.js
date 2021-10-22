import {Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import {Main} from "./components/Main"
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";

const App = (props) => {

    return (
        <>
            <Header/>
            <Main>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/country/:name' component={Details} />
                    <Route path='/' component={NotFound} />
                </Switch>
            </Main>
        </>
    )
}

export default App;
