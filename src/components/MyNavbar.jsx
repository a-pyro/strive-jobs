import { Navbar, Container, Button } from 'react-bootstrap';
const MyNavbar = () => {
  return (
    <Navbar bg='info'>
      <Container>
        <Navbar.Brand href='#home'>
          <Button variant='warning' className='rounded-circle'>
            {' '}
            🏠{' '}
          </Button>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
