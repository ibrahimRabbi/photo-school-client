 
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-slate-50' : ""}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;