import Details from 'components/Details';
import Favourites from 'components/Favourites';
import Home from 'components/Home';
import MyNavbar from 'components/MyNavbar';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { toast } from 'react-toastify';

toast.configure();
function App() {
  useEffect(() => {
    toast('Welcome 🙂', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  }, []);
  return (
    <>
      <Router>
        <MyNavbar />
        <Route path='/' exact component={Home} />
        <Route path='/details/:id' exact component={Details} />
        <Route path='/favourites' exact component={Favourites} />
      </Router>
    </>
  );
}

export default App;
