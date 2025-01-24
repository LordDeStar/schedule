import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './stores/UserStore';
import { ScheduleContext, UserContext } from './stores';
import ScheduleStore from './stores/ScheduleStore';
const root = ReactDOM.createRoot(document.getElementById('root'));

const userStore = new UserStore();
const scheduleStore = new ScheduleStore();
root.render(
  <UserContext.Provider value={userStore} >
    <ScheduleContext.Provider value={scheduleStore}>
      <App />
    </ScheduleContext.Provider>
  </UserContext.Provider>
  
);