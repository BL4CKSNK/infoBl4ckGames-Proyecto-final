import {Route,Routes } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import React from 'react';
import ProtectedRoutes from './Components/ProtectedRoutes';
import ProtectedRoutes2 from './Components/ProtectedRoutes2';

//utilizo el lazy para hacer que no cargue el contenido de las diferentes secciones es más tema rendimiento

const Principal = React.lazy(() => import('./paginas/Principal'));
const Registro = React.lazy(() => import('./paginas/Registro'));
const Pagina404 = React.lazy(() => import('./paginas/404'));
const Juego = React.lazy(() => import('./paginas/Juego'));
const Perfil = React.lazy(() => import('./paginas/Perfil'));
const Carrito = React.lazy(() => import('./paginas/Carrito'));
const Admin = React.lazy(() => import('./paginas/Admin'));
const Biblioteca = React.lazy(() => import('./paginas/Biblioteca'));
const AdminClearJuego = React.lazy(() => import('./Components/AdminClearJuego'));
const AdminClearUser = React.lazy(() => import('./Components/AdminClearUser'));
const AdminEliminarCategoria = React.lazy(() => import('./Components/AdminEliminarCategoria'));
const AdminFormAddCategoria = React.lazy(() => import('./Components/AdminFormAddCategoria'));
const AdminFormCategoria = React.lazy(() => import('./Components/AdminFormCategoria'));
const AdminFormJuego = React.lazy(() => import('./Components/AdminFormJuego'));
const AdminFromCarrousel = React.lazy(() => import('./Components/AdminFromCarrousel'));
const FormularioCompra = React.lazy(() => import('./paginas/FormularioCompra'));
const GameInfo = React.lazy(() => import('./paginas/GameInfo'));
const AdminEditJuego = React.lazy(() => import('./Components/AdminEditJuego'));

//El protected route lo uso para envolver las rutas del administrador solo podra acceder el usuario que tenga id 1 que en este caso es el admin
function App() {
 
  return (
   
    
    <>
      <PrimeReactProvider>
        <Routes> 
          <Route path="/login" element={
            <React.Suspense fallback='Cargando..'>
                 <Registro />
            </React.Suspense>
            } />
            <Route exact path="/" element={
              <React.Suspense fallback='Cargando..'>
                 <Principal />
              </React.Suspense>
            } />
            <Route path="/juego/:id" element={
              <React.Suspense fallback='Cargando..'>
                <Juego />
              </React.Suspense>
            } />
            <Route element={<ProtectedRoutes2/>}>
              <Route path="/Perfil" element={
                <React.Suspense fallback='Cargando..'>
                    <Perfil />
                </React.Suspense>
            } />
              <Route path="/Carrito" element={
              <React.Suspense fallback='Cargando..'>
                    <Carrito />
                </React.Suspense>
              } />
            </Route>
            
            <Route path="/FormularioCompra" element={
             <React.Suspense fallback='Cargando..'>
                 <FormularioCompra/>
              </React.Suspense>
            } />

          <Route element={<ProtectedRoutes />}>
            <Route path="/Admin" element={
              <React.Suspense fallback='Cargando..'>
                <Admin/>
              </React.Suspense>
            }/>
               <Route path="/AdminClearGame" element={
             <React.Suspense fallback='Cargando..'>
                  <AdminClearJuego/>
              </React.Suspense>
            } />
            <Route path="/AdminClearUser" element={
             <React.Suspense fallback='Cargando..'>
                  <AdminClearUser/>
              </React.Suspense>
            } />
            <Route path="/AdminDeleteCat" element={
             <React.Suspense fallback='Cargando..'>
                 <AdminEliminarCategoria/>
              </React.Suspense>
            } />
             <Route path="/AdminAddCat" element={
             <React.Suspense fallback='Cargando..'>
                 <AdminFormAddCategoria/>
              </React.Suspense>
            } />
            <Route path="/AdminCategoria" element={
             <React.Suspense fallback='Cargando..'>
                <AdminFormCategoria/>
              </React.Suspense>
            } />
            <Route path="/AdminAddGame" element={
             <React.Suspense fallback='Cargando..'>
                <AdminFormJuego/>
              </React.Suspense>
            } />
             <Route path="/AdminCarrousel" element={
             <React.Suspense fallback='Cargando..'>
                <AdminFromCarrousel/>
              </React.Suspense>
            } />
            <Route path="/AdminEdit" element={
             <React.Suspense fallback='Cargando..'>
                <AdminEditJuego/>
              </React.Suspense>
            } />
            
            
          </Route>

            <Route path="/Biblioteca" element={
              <React.Suspense fallback='Cargando..'>
                  <Biblioteca/>
              </React.Suspense>
            }/>
            <Route path="*" element={
             <React.Suspense fallback='Cargando..'>
                  <Pagina404 />
              </React.Suspense>
            } /> 
            <Route path="/Info" element={
             <React.Suspense fallback='Cargando..'>
                  <GameInfo/>
              </React.Suspense>
            } />
           
        </Routes>
        </PrimeReactProvider>
    </>
      
    
   
  )
}

export default App;
