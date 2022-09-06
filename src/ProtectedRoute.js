import { Navigate } from "react-router-dom";
import { useCookies, withCookies } from "react-cookie";

const ProtectedRoute = ({ children }) => {
    const [cookies] = useCookies();
    let userData = cookies.Username;
    return userData ? children : <Navigate to="/login" />;
  }

  export default withCookies(ProtectedRoute)
