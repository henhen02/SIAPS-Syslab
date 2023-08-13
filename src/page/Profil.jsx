import React from "react";
import { useUser } from "../hooks/useUser";

const Profil = () => {
  const { user } = useUser();

  return <div>{user?.nip}</div>;
};

export default Profil;
