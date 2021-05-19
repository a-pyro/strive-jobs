import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from 'redux/actions';

const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

const Job = ({
  title,
  company,
  type,
  location,
  created_at,
  id,
  favourites,
  addFavourite,
  removeFavourite,
  job,
}) => {
  const handleAddFav = () => {
    addFavourite(job);
  };

  const handleRemoveFav = () => {
    removeFavourite(id);
  };

  return (
    <Col xs={12}>
      <div className='d-flex border-bottom justify-content-between py-2'>
        <div>
          <Link style={{ color: 'white' }} to={`/details/${id}`}>
            {title}
          </Link>
          <p className='mb-0'>
            {company} - <span>{type}</span>
          </p>
          {favourites.some((job) => job.id === id) ? (
            <span onClick={handleRemoveFav} style={{ cursor: 'pointer' }}>
              💔
            </span>
          ) : (
            <span onClick={handleAddFav} style={{ cursor: 'pointer' }}>
              ❤️
            </span>
          )}
        </div>
        <div className='text-right'>
          <p className='text-right mb-0'>{location}</p>
          <p className='text-right mb-0'>
            {format(new Date(created_at), 'MM/dd/yyyy')}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default connect(mapStateToProps, { addFavourite, removeFavourite })(Job);
