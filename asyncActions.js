//install redux then import it. NOTE: This is a node.js example, for REACT use "Import" method instead of require
const redux = require("redux");
//**STORE** CREATE STORE
const createStore = redux.createStore;
const store = createStore(reducer);
//SET 3 INITIAL STATES
const initialState = {
  loading: false,
  users: [],
  error: "",
};
//**ACTIONS**DEFINE ACTIONS
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};
///**REDUCER**CREATE REDUCER USING SWITCH STATEMENT TO DEFINE WHAT HAPPENDS IN EACH SITUATION(case)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};
