import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <Header />
      <Switch>

        <Route exact path="/" component={Home}>
         
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/work">
          <Work />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route component={ErrorPage}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
