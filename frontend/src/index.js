import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './stores/UserStore';
import { ScheduleContext, UserContext, GradesContext, SubjectsContext, GroupContext } from './stores';
import ScheduleStore from './stores/ScheduleStore';
import GradesStore from './stores/GradesStore';
import SubjectsStore from './stores/SubjectsStore';
import GroupsStore from './stores/GroupsStore';
const root = ReactDOM.createRoot(document.getElementById('root'));

const userStore = new UserStore();
const scheduleStore = new ScheduleStore();
const gradesStore = new GradesStore();
const subjectsStore = new SubjectsStore();
const groupStore = new GroupsStore();

root.render(
  <UserContext.Provider value={userStore} >
    <ScheduleContext.Provider value={scheduleStore}>
      <GradesContext.Provider value={gradesStore}>
        <SubjectsContext.Provider value={subjectsStore}>
          <GroupContext.Provider value={groupStore}>
            <App />
          </GroupContext.Provider>
        </SubjectsContext.Provider>
      </GradesContext.Provider>
    </ScheduleContext.Provider>
  </UserContext.Provider>
);