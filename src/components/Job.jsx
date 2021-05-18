import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

const Job = ({ title, company, type, location, created_at, id }) => {
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

export default Job;
