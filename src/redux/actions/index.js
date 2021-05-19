export const addFavourite = (job) => ({
  type: 'ADD_FAVOURITE',
  payload: job,
});

export const removeFavourite = (idx) => ({
  type: 'REMOVE_FAVOURITE',
  payload: idx,
});
