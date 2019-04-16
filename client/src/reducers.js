import { addReducer } from "reactn";

addReducer("setAuthToken", (global, token) => ({
  authToken: token
}));

export default {};
