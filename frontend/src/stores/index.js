import React from "react";

import UserStore from "./UserStore";

export const UserContext = React.createContext(new UserStore());