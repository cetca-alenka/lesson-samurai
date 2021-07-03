import React from 'react';
import './App.css';
import Header from './coponents/header/header';
import Navbar from './coponents/navbar/navbar';
import Profile from './coponents/profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContener from './coponents/dialogs/dialogsContener';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='my-wraper'>
        <Header />
        <Navbar />
        <div className='wraper-content'>
          <Route path='/dialogs' render={() => <DialogsContener />} />
          {/* <DialogsContener store={props.store} />} /> */}
          <Route path='/profile' render={() => <Profile />} />
          {/* <Profile store={props.store} />} /> */}
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
