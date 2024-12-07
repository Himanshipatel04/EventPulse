import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create UserContext to share user data
const UserContext = createContext();

// Custom hook to use user context
export const useUser = () => {
  return useContext(UserContext);
};

// UserContextProvider component to manage the user state and fetch the user
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/users/getUser",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        setUser(response.data.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      } 
    };

    fetchUser();
  }, []); // Run only on component mount

  // Provide the user state and setter function to the children
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
