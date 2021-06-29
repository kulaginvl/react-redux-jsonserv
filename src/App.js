import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
);
export default App;
