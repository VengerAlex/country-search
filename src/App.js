import {useState} from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import {Main} from "./components/Main"
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";

const App = (props) => {
    const [countries, setCountries] = useState([])

    return (
        <>
            <Header/>
            <Main>
                <Switch>
                    <Route exact path='/'><HomePage
                        setCountries={setCountries}
                        countries={countries}/>
                    </Route>
                    <Route exact path='/country/:name' component={Details}/>
                    <Route path='/' component={NotFound}/>
                </Switch>
            </Main>
        </>
    )
}

export default App;
