import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import loginReducer from "./login-reducer";
let reducers=combineReducers({
                ProfilePage:profileReducer,
                DialogPage:dialogReducer,
                SideBar:sidebarReducer,
                UsersPage:usersReducer,
                Login:loginReducer
})
let store=createStore(reducers)
window.store=store
export default store