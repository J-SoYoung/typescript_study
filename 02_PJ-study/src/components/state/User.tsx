import React, { useState } from "react";
interface AuthUser {
  name: string;
  email: string;
}

export const User = () => {
  // const [user, setUser] = useState<null | AuthUser>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  
  const handleLogin = () => {
    setUser({
      name: "thdud",
      email: "thdud@aaa.aaa",
    });
  };
  const handleLogout = () => {
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LoginOut</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
