const initialState = {
    birds: [],
  };
  
  const birdReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BIRD':
        return {
          ...state,
          birds: [...state.birds, { name: action.payload, likes: 0 }],
        };
      case 'LIKE_BIRD':
        return {
          ...state,
          birds: state.birds.map((bird) =>
            bird.name === action.payload ? { ...bird, likes: bird.likes + 1 } : bird
          ),
        };
      default:
        return state;
    }
  };
  
  export default birdReducer;