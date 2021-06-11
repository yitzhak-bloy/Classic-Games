import { useState, createContext } from "react";

export const TurnContext = createContext({
  whoseTurn: "X",
  TurnChange: () => {},
});

export const TurnProvider = (props) => {
  const [whoseTurn, setWhoseTurn] = useState("X");

  return (
    <TurnContext.Provider
      value={{
        whoseTurn: whoseTurn,
        TurnChange: (whose) => {
          setWhoseTurn(whose);
        },
      }}
    >
      {props.children}
    </TurnContext.Provider>
  );
};
