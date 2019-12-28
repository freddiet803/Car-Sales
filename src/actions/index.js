export const ADD_FEATURE = 'ADD_FEATURE'; //action type

export const addFeature = feature => {
  // action creator
  console.log(feature);
  return {
    // action
    type: ADD_FEATURE,
    payload: feature
  };
};

export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = feature => {
  console.log(feature);

  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};
