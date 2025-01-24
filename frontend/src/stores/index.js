import React from "react";

import UserStore from "./UserStore";
import ScheduleStore from "./ScheduleStore";

export const UserContext = React.createContext(new UserStore());
export const ScheduleContext = React.createContext(new ScheduleStore());