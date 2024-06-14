import { Link } from 'react-router-dom';
import errorImg from '../img/DEFINICIONES.-ERROR-404.png';

export default function Pagina404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={errorImg} alt="Error 404" className="max-w-full h-auto" />
            <Link to='/' className="mt-4 text-blue-500 hover:underline">Volver al Inicio</Link>
        </div>
    );
}