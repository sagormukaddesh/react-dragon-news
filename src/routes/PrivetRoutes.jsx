import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <span className="loading loading-dots text-center loading-lg"></span>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivetRoutes;