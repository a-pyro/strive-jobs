export const fetchJobs = () => async (dispatch, getState) => {
  dispatch({ type: 'GET_JOBS_LOADING' });
  try {
    const resp = await fetch(
      'https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions.json'
    );
    if (resp.ok) {
      const data = await resp.json();
      dispatch({ type: 'GET_JOBS_SUCCESS', payload: data });
    } else {
      dispatch({ type: 'GET_JOBS_FAILURE' });
    }
  } catch (error) {
    dispatch({ type: 'GET_JOBS_FAILURE' });
    console.log(error);
  }
};

export const searchJob = (position, area) => async (dispatch, getState) => {
  dispatch({ type: 'GET_JOBS_LOADING' });
  try {
    const resp = await fetch(
      `https://spotify-fetch.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${area}`
    );
    if (resp.ok) {
      const data = await resp.json();
      dispatch({ type: 'GET_JOBS_SUCCESS', payload: data });
    } else {
      dispatch({ type: 'GET_JOBS_FAILURE' });
    }
  } catch (error) {
    dispatch({ type: 'GET_JOBS_FAILURE' });
    console.log(error);
  }
};
