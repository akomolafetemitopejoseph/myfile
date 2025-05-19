import { Children, useState } from "react";

const UserContext = createContext();

export const useProvider = ({ Children }) => {
  const [gender, setGender] = useState("");
};

return(
    <UserContext.Provider value={{gender, setGender}}>
   {Children} 
    </UserContext.Provider>
)
