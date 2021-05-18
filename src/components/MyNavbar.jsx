import { Navbar, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const MyNavbar = () => {
  const history = useHistory();
  return (
    <Navbar bg='info'>
      <Container>
        <Button
          variant='warning'
          onClick={() => history.push('/')}
          className='rounded-circle'
        >
          {' '}
          🏠{' '}
        </Button>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
