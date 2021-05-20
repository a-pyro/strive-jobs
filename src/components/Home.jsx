import { useEffect, useState } from 'react';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import Joblist from './Joblist';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { fetchJobs } from 'redux/actions/jobs';

const mapStateToProps = (state) => state.jobs;

const Home = ({ jobList, loading, error, fetchJobs }) => {
  // const [jobs, setJobs] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchJobs = async () => {
  //   try {
  //     setLoading(true);

  //     const resp = await fetch(
  //       `https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions.json`
  //     );
  //     const data = await resp.json();

  //     setJobs(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const searchJobs = async (position, area) => {
  //   try {
  //     const resp = await fetch(
  //       `https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${area}`
  //     );
  //     const data = await resp.json();
  //     console.log(data);
  //     setJobs(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <>
      {/* <SearchBar searchJobs={searchJobs} /> */}
      <SearchBar />
      <Container className='min-vh-100'>
        {(loading && (
          <Row className='justify-content-center mt-3'>
            <Spinner animation='grow' />
          </Row>
        )) || (
          <>
            <Row className='mt-3'>
              <Joblist jobs={jobList} />
            </Row>{' '}
            <Button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              variant='info'
              style={{ position: 'sticky', bottom: '0' }}
              className='rounded-circle lh-base d-block ms-auto'
            >
              🔝
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default connect(mapStateToProps, { fetchJobs })(Home);
