const initialState = 5;
export const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'increament':
      return state + action.payload;
    case 'decreament':
      return state - action.payload;
    default:
      return state;
  }
};

const initialName = 'Please enter your name';
export const nameReducer = (state = initialName, action) => {
  switch (action.type) {
    case 'updatetitleName':
      console.log('updatetitleName');
      return action.payload;
    case 'addGuestdetails':
      return action.payload;
    default:
      return state;
  }
};
