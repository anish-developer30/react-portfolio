import { createContext, useContext, useState } from "react";

export const PassData = createContext();

export const DataProvider = ({ children }) => {
  const [isdark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  return (
    <PassData.Provider value={[isdark, setIsDark]}>
      {children}
    </PassData.Provider>
  );
};

export const useData = () => {
  return useContext(PassData);
};
