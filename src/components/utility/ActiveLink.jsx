 
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? 'text-yellow-300' : ""}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;