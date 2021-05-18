import { useState, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
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
      setJob(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);
  console.log(job);
  return (
    <Container className='min-vh-100'>
      <Row className='mt-3 text-white'>
        {/* <Col xs={12}>{job.description}</Col> */}
        <Col xs={12}>
          {loading === true || job === 'undefined' ? (
            <div className='d-flex justify-content-center'>
              <Spinner animation='grow' />
            </div>
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: `${job.description}`,
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
