import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {}, []);
  return <div>Details</div>;
};

export default Details;
