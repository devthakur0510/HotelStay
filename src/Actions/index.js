export const increament = num => {
  return {
    type: 'increament',
    payload: num,
  };
};

export const decreament = num => {
  return {
    type: 'decreament',
    payload: num,
  };
};

export const updatetitleName = name => {
  return {
    type: 'updatetitleName',
    payload: name,
  };
};

export const addGuestdetails = data => {
  return {
    type: 'addGuestdetails',
    payload: data,
  };
};
