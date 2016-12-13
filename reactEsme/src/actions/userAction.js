/**
 * Created by simonthome on 12/12/2016.
 */
export const addUser = (user) => {
  // Return action
  return {
    // Unique identifier
    type: 'ADD_USER',
    user: user,

  }
};

export const loginUser = (id) => {
  return {
    type: 'LOGIN',
    id,
  }
};

export const logoutUser = (id) => {
  return {
    type: 'LOGOUT',
    id,
  }
};

export const removeUser = (id) => {
  return {
    type: 'REMOVE_USER',
    id,
  }
};