import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../const/cookie';
const ProtectedRoutes = ({ children }) => {
    const idAdmin = getCookie('id');

    // Verificar si el usuario es administrador
    const esAdmin = idAdmin === "1";

    return esAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;