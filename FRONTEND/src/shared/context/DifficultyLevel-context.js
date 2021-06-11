import { useState, createContext } from "react";

export const DifficultyLevelContext = createContext({
  difficultyLevel: "Hard",
  difficultyChange: () => {},
});

export const DifficultyLevelProvider = (props) => {
  const [level, setLevel] = useState("hard");

  return (
    <DifficultyLevelContext.Provider
      value={{
        difficultyLevel: level,
        difficultyChange: (level) => {
          setLevel(level === "hard" ? "easy" : "hard");
        },
      }}
    >
      {props.children}
    </DifficultyLevelContext.Provider>
  );
};
