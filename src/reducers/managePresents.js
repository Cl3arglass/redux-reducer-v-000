export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return {numberOfPresentst: state.numberOfPresents + 1}
    default:
      return state;
  }
}
