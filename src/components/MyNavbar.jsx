import { Navbar, Container, Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
const MyNavbar = () => {
  let history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <Navbar bg='info'>
      <Container>
        <Button
          variant='warning'
          onClick={handleClick}
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
