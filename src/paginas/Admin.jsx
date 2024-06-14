import LayaoutAdmin from '../Layaout/LayaoutAdmin';
import MainLayaout from '../Layaout/MainLayaout';
import Grafica from '../img/grafica.jpg';
export default function Admin() {
    return (
        <MainLayaout>
            <LayaoutAdmin> 
                <div className="mx-auto max-w-md text-center font-bold">
                    <h1 className="font-bold mb-4 lg:text-2xl sm:text-sm">Bienvenido al Panel de Administración</h1>
                    <p className="text-gray-700 lg:text-xl mb-4 sm:text-sm">¡Hola Administrador!</p>
                    <p className="text-gray-700 lg:text-xl mb-4 sm:text-sm">Aquí tienes las distintas secciones</p>
                    <div className="">
                        <img src={Grafica} alt="Gráfica" className="max-w-full h-auto rounded-lg shadow-lg sm:max-w-xs md:max-w-sm lg:max-w-md" />
                    </div>
                </div>      
               
            </LayaoutAdmin>
        </MainLayaout>
    );
}
