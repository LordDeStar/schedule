import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './stores/UserStore';
import { UserContext } from './stores';
const root = ReactDOM.createRoot(document.getElementById('root'));

const userStore = new UserStore();
root.render(
  <UserContext.Provider value={userStore} >
      <App />
  </UserContext.Provider>
  
);