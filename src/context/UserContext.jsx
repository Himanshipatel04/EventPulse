import { createContext, useContext, useEffect, useState } from "react";

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
    const fetchUser = () => {
      try {
        const userFromLocalStorage = localStorage.getItem("user");
        if (userFromLocalStorage) {
          const parsedData = JSON.parse(userFromLocalStorage);

          // Check if 72 hours have passed since login
          const now = Date.now();
          const timeDifference = now - parsedData.timestamp;

          if (timeDifference > 72 * 60 * 60 * 1000) {
            // Expired: Remove user data
            localStorage.removeItem("user");
            console.log("User data has expired and been removed.");
            setUser(null); // Ensure state is cleared
          } else {
            // Valid: Set user state
            setUser(parsedData.user);
          }
        } else {
          console.log("No user found in localStorage.");
        }
      } catch (error) {
        console.log("Error while fetching user from localStorage!", error);
      }
    };

    fetchUser(); // Call the function once on component mount
  }, []); // Empty dependency array ensures it only runs once

  // Provide the user state and setter function to the children
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
