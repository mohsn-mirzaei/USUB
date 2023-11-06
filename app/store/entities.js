import { combineReducers } from "redux";
import categoryListReducer from "./reducers/categoryList";
import contactListReducer from "./reducers/contactList";

export default combineReducers({
  categoryList: categoryListReducer,
  contactList: contactListReducer,
});
