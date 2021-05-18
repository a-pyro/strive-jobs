import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Joblist from './Joblist';
import SearchBar from './SearchBar';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchJobs = async () => {
    try {
      setLoading(true);
      // const resp = await fetch(
      //   `${process.env.REACT_APP_API_URL}/postions?description=react&location=miami.json`
      // );
      const resp = await fetch(
        'https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions.json'
      );
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <SearchBar />
      <Container className='min-vh-100'>
        <Joblist jobs={jobs} />
      </Container>
    </>
  );
};

export default Home;
