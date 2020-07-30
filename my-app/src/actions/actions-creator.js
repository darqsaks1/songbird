
export const setGameMode = (actionType) => {
  const action = {
    type: actionType,
  };
  return action;
};
  
export const setLevel = (actionType, data) => {
  const action = {
    type: actionType,
    payload: data,
  };
  return action;
};

export const setBirdNumber = (actionType, data) => {
  const action = {
    type: actionType,
    payload: data,
  };
  return action;
};

export const setAboutBlock = (actionType) => {
  const action = {
    type: actionType,
  };
  return action;
};
