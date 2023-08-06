export const addBird = (birdName) => {
    return {
      type: 'ADD_BIRD',
      payload: birdName,
    };
  };
  
  export const likeBird = (birdName) => {
    return {
      type: 'LIKE_BIRD',
      payload: birdName,
    };
  };