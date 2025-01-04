import React from "react";
import UserContext from "./UserContext";


// UserContextProvider this provide value to all children under UserContext.Provider
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider