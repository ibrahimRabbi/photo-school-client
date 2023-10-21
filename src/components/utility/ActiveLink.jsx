 
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? ' bg-purple-800 p-2 rounded-lg text-white' : ""}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;