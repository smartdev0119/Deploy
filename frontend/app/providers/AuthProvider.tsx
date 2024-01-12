// import React, { useState, useContext, createContext } from 'react';

// // Create a context for the authentication data
// const AuthContext = createContext(null);

// // The provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (username, password) => {
//     // Implement your login logic here, and set the user state accordingly
//     const loggedInUser = { name: 'John Doe' }; // Dummy user, replace with real authentication logic
//     setUser(loggedInUser);
//   };

//   const logout = () => {
//     // Implement your logout logic here
//     setUser(null);
//   };

//   // The value that will be supplied to descendants of this provider
//   const authContextValue = {
//     user,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
// };

// // Hook to use the authentication context
// export const useAuth = () => useContext(AuthContext);