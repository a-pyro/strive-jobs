import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchJobs } from 'redux/actions/jobs';
import Job from './Job';
const Joblist = ({ jobs, fetchJobs }) => {
  return (
    <>
      <h1 className='text-white'>Jobs 👷🏻</h1>
      {jobs.map((job) => (
        <Job key={job.id} {...job} job={job} />
      ))}
      {jobs.length === 0 && (
        <Button onClick={fetchJobs} variant='warning' className='mb-3'>
          No results..See all Jobs
        </Button>
      )}
    </>
  );
};

export default connect(null, { fetchJobs })(Joblist);
