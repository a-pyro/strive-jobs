import { Col, Container, Row, ListGroup, Button, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeFavourite } from 'redux/actions';
import { useHistory } from 'react-router-dom';

const mapStatetoProps = (state) => ({
  favourites: state.favourites,
});

const Favourites = ({ favourites, removeFavourite }) => {
  const history = useHistory();
  const handleRemoveFav = (id) => {
    removeFavourite(id);
  };

  return (
    <Container className='min-vh-100 mt-3'>
      <Row className='justify-content-center'>
        <Col>
          {favourites.length === 0 && (
            <div className='text-center'>
              <h1 className='text-center text-white'>
                No fav yet, go add some!
              </h1>
              <Button
                variant='warning'
                onClick={() => history.push('/')}
                className='rounded-circle mt-3'
              >
                {' '}
                🏠{' '}
              </Button>
            </div>
          )}
          <ListGroup>
            {favourites.map((fav) => (
              <ListGroup.Item key={fav.id} className='d-flex lh-lg'>
                <span className='me-auto'>
                  {fav.title} - {fav.company}
                </span>

                <span
                  onClick={() => handleRemoveFav(fav.id)}
                  style={{ cursor: 'pointer' }}
                  className='me-3'
                >
                  💔
                </span>

                <Badge
                  onClick={() => history.push(`/details/${fav.id}`)}
                  style={{ cursor: 'pointer' }}
                  className='bg-secondary lh-lg'
                >
                  Details
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStatetoProps, { removeFavourite })(Favourites);
