import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '../const/cookie';

const ProtectedRoutes2 = () => {
    const usuario = getCookie('id');

    // Verificar si hay un usuario en la cookie
    const tieneUsuario = usuario !== null;

    return tieneUsuario ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoutes2;