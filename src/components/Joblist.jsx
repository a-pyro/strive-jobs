import Job from './Job';
const Joblist = ({ jobs }) => {
  return (
    <>
      <h1>Jobs</h1>
      {jobs.map((job) => (
        <Job key={job.id} {...job} job={job} />
      ))}
    </>
  );
};

export default Joblist;
