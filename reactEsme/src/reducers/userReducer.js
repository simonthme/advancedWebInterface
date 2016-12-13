/**
 * Created by simonthome on 12/12/2016.
 */



const users = [
  {
    username: 'simon', password: 'simon', login: false
  },
  {
    username: 'maite', password: 'maite', login: false
  }
];



export default (state = users, action) => {
  switch (action.type) {
    // Check if action dispatched is
    // CREATE_BOOK and act on that
    case 'ADD_USER':
      return [
        ...state,
        Object.assign({}, action.user)
      ];
      break;
    case 'LOGIN' :
      return state.map((user, key) => {
          if (key === action.id) {
            user.login = true;
            return user;
          } else {
            return user;
          }
        });
      break;
    case 'LOGOUT':
      return state.map((user, key) => {
        if (key === action.id) {
          user.login = false;
          return user;
        } else {
          return user;
        }
      });
      break;
    case 'REMOVE_USER':
      state.splice(action.id, 1);
      return state;
      break;
    default:
      return state;
  }
};