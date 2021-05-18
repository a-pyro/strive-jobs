import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const Details = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchJob = async () => {
    try {
      setLoading(true);
      const resp = await fetch(
        `https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions/${id}.json`
      );
      const data = await resp.json();
      console.log(data);
      setJob(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <Container>
      <Row className='mt-3 text-white'>
        {/* <Col xs={12}>{job.description}</Col> */}
        <Col xs={12}>{parse(job.description && job.description)}</Col>
      </Row>
    </Container>
  );
};

export default Details;
