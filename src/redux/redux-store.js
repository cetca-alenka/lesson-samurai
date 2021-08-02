import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddlewear from 'redux-thunk'
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
let store=createStore(reducers, applyMiddleware(thunkMiddlewear))
window.store=store
export default store