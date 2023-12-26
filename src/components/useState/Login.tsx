import React, { useState } from "react";

type userType = { first: string; last: string };

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [user, setUser] = useState<null | userType>(null);

  const handleLogIn = () => {
    setIsLogIn(true);
    setUser({ first: "Shubham", last: "Pandey" });
  };
  const handleLogOut = () => {
    setIsLogIn(false);
    setUser(null);
  };

  return (
    <div>
      <hr />
      <button onClick={handleLogIn}>Log in</button>
      <button onClick={handleLogOut}>Log out</button>
      {isLogIn && user?.first}
      <h1>User is {isLogIn ? "Logged in." : "Logged out."}</h1>
    </div>
  );
};

export default Login;
