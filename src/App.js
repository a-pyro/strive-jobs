import Details from 'components/Details';
import Home from 'components/Home';
import MyNavbar from 'components/MyNavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <MyNavbar />
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/details/:id' exact component={Details} />
      </Router>
    </>
  );
}

export default App;
