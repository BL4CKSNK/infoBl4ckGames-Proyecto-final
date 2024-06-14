import { Dropdown } from 'primereact/dropdown';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useMemo } from 'react';


export default function LayoutDashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedRoute, setSelectedRoute] = useState(null);

    //Rutas de los formularios del administrador
    const routes = useMemo(() => [
      
        { path: '/Admin', name: 'Inicio' },
        { path: '/AdminAddGame', name: 'Insertar Juego' },
        { path: '/AdminEdit', name: 'Editar Juego' },
        { path: '/AdminCategoria', name: 'Insertar Categoria en Juego' },
        { path: '/AdminAddCat', name: 'Insertar Categoria' },
        { path: '/AdminCarrousel', name: 'Insertar Imagenes Carrousel' },
        { path: '/AdminClearGame', name: 'Borrar Juego' },
        { path: '/AdminClearUser', name: 'Borrar Usuario' },
        { path: '/AdminDeleteCat', name: 'Borrar Categoria' }
        
       
    ], []);

    useEffect(() => {
        // Buscar la ruta actual en las opciones y establecerla como seleccionada
        const currentRoute = routes.find(route => route.path === location.pathname);
        if (currentRoute) {
            setSelectedRoute(currentRoute);
        }
    }, [location.pathname, routes]);

    const handleRouteChange = (value) => {
        setSelectedRoute(value);
        navigate(value.path);
    };

    return (
        <>
            <div className="flex justify-between px-4 py-8 md:hidden lg:hidden text-center  ">
                <Dropdown
                    value={selectedRoute}
                    onChange={(e) => handleRouteChange(e.value)}
                    options={routes}
                    optionLabel="name"
                    placeholder="Panel de Control"
                    className="w-full p-2"
                    itemTemplate={(option) => (
                        <div className="p-3">{option.name}</div>
                    )}
                />
            </div>
            <div className="bg-gray-800  w-64 px-4 py-8 hidden md:block rounded-lg shadow-xl sm:text-sm">
                <div className="text-white text-xl sm:text-sm font-semibold mb-6">Panel De control</div>
                <ul>
                    {routes.map((route, index) => (
                        <li key={index} className="mb-4">
                            <NavLink
                                to={route.path}
                                className={({ isActive }) => (
                                    isActive
                                      ? "bg-fuchsia-600 text-white rounded-lg transition-colors duration-300 shadow-md"
                                      : "text-white hover:text-black hover:bg-white rounded-lg transition-colors duration-300"
                                  ) + " text-sm py-2 px-4"}
                            >
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
