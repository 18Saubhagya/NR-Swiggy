import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Some Name",
});

export default UserContext;