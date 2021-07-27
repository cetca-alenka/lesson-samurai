import React from 'react';
import './App.css';

import Navbar from './coponents/navbar/navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContener from './coponents/dialogs/dialogsContener';
import UsersContener from './coponents/users/usersContener';
import ProfileContainer from './coponents/profile/profileContener';
import HeaderContainer from './coponents/header/headerContener';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='my-wraper'>
        <HeaderContainer />
        <Navbar />
        <div className='wraper-content'>
          <Route path='/dialogs' render={() => <DialogsContener />} />
          {/* <DialogsContener store={props.store} />} /> */}
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          {/* <Profile store={props.store} />} /> */}
          <Route path='/users' render={() => <UsersContener />} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
