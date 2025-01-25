import React from "react";

import UserStore from "./UserStore";
import ScheduleStore from "./ScheduleStore";
import GradesStore from "./GradesStore";
import SubjectsStore from "./SubjectsStore";
import GroupsStore from "./GroupsStore";


export const UserContext = React.createContext(new UserStore());
export const ScheduleContext = React.createContext(new ScheduleStore());
export const GradesContext = React.createContext(new GradesStore());
export const SubjectsContext = React.createContext(new SubjectsStore());
export const GroupContext = React.createContext(new GroupsStore());