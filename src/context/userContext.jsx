import { createContext, useState } from "react";

import React from "react";

export const UserContext = createContext();

export const UserProvider = ({ childern }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {childern}
    </UserContext.Provider>
  );
};
