import { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Joblist from './Joblist';
import SearchBar from './SearchBar';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchJobs = async () => {
    try {
      setLoading(true);

      const resp = await fetch(
        'https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions.json'
      );
      const data = await resp.json();
      console.log(data);
      setJobs(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const searchJobs = async (position, area) => {
    try {
      const resp = await fetch(
        `https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions/.json?description=${position}&location=${area}`
      );
      const data = await resp.json();
      console.log(data);
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <SearchBar searchJobs={searchJobs} />
      <Container className='min-vh-100'>
        {(loading && (
          <Row className='justify-content-center mt-3'>
            <Spinner animation='grow' />
          </Row>
        )) || (
          <Row className='mt-3'>
            <Joblist jobs={jobs} />
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;
