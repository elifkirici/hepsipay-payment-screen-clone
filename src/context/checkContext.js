import { createContext, useState, useContext } from "react";

const checkContext = createContext();

const Provider = ({ children }) => {
  const [Check1, setCheck1] = useState("");
  const [Check2, setCheck2] = useState("");
  const [Check3, setCheck3] = useState("");
  const [Check4, setCheck4] = useState("");
  const [Check5, setCheck5] = useState("");
  const [Check6, setCheck6] = useState("");

  const data = {
    Check1,
    Check2,
    Check3,
    Check4,
    Check5,
    Check6,
    setCheck1,
    setCheck2,
    setCheck3,
    setCheck4,
    setCheck5,
    setCheck6,
  };
  return <checkContext.Provider value={data}>{children}</checkContext.Provider>;
};
export const UseCheck = () => useContext(checkContext);
export default Provider;
