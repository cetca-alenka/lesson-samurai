import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';
let reducers=combineReducers({
                ProfilePage:profileReducer,
                DialogPage:dialogReducer,
                SideBar:sidebarReducer
})
let store=createStore(reducers)
export default store