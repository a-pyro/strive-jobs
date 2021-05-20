import { initialState } from 'redux/store';
const jobReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    // case 'ADD_FAVOURITE':
    //   return {
    //     ...state,
    //     favourites: [...state.favourites, action.payload],
    //   };
    // case 'REMOVE_FAVOURITE':
    //   return {
    //     ...state,
    //     favourites: state.favourites.filter((el) => el.id !== action.payload),
    //   };

    default:
      return state;
  }
};

export default jobReducer;
