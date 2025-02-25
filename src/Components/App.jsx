import styles from "../css/App.module.css";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "../pages/MovieDetails";
import { LandingPage } from "../pages/LandingPage";

const App = () => {
    return ( 
        <Router>
            <header>
                <Link to="/"> <h1 className={styles.title} >Search Movies</h1> </Link>
            </header>
            <main>
                <Switch>
                    <Route exact path="/movies/:movieId"> <MovieDetails /> </Route>
                    <Route path="/"> <LandingPage /> </Route>
                </Switch>
            </main>
        </Router>
    );
}
 
export default App;