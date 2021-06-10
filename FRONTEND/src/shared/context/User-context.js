import { useState, useEffect, createContext } from "react";

export const UserContext = createContext({
  email: undefined,
  setEmail: () => {},
});

export const UserContextProvider = (props) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setEmail(storedData.email);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        email: email,
        setEmail: (email) => setEmail(email),
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
