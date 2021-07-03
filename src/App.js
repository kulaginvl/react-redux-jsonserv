import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Subject from './components/Subject';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles/:id" component={Subject} />
    </Switch>
    <Footer />
  </BrowserRouter>
);
export default App;
