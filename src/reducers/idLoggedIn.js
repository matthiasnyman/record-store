const loggedReducer = (state = false, action) => {
  switch(action.type){
    case 'SIGNIN':
      return state = true
    case 'SIGNOUT':
      return state = false
    default:
      return state
  }
}

export default loggedReducer;