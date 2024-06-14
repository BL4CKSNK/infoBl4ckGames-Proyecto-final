import { useState, useEffect } from 'react';
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { IoCloseCircle } from "react-icons/io5";
const Canvas = ({ juegos, setFilteredJuegos, categoriasUnicas, isOpen, toggleSidebar }) => {
    const [selectedCategoria, setSelectedCategoria] = useState('');
    const [precioMinimo, setPrecioMinimo] = useState(0); // Estado para el precio mínimo
    const [precioMaximo, setPrecioMaximo] = useState(100); // Estado para el precio máximo
    const [ordenAlfabetico, setOrdenAlfabetico] = useState(''); 
    const [fechaMinima, setFechaMinima] = useState('');
    const [fechaMaxima, setFechaMaxima] = useState('');
    const [selectedYear, setSelectedYear] = useState(''); 

    useEffect(() => {
        let juegosFiltrados = juegos;

        // Filtrar por categoría
        if (selectedCategoria !== '') {
            juegosFiltrados = juegosFiltrados.filter(juego =>
                juego.Categorias.includes(selectedCategoria)
            );
        }

        // Filtrar por rango de precios incluyendo IVA
        const iva = 0.21;
        juegosFiltrados = juegosFiltrados.filter(juego => {
            const precioConIva = juego.Precio * (1 + iva);
            return precioConIva >= precioMinimo && precioConIva <= precioMaximo;
        });

        // Filtrar por rango de fecha de lanzamiento
        if (fechaMinima && fechaMaxima) {
            juegosFiltrados = juegosFiltrados.filter(juego =>
                new Date(juego.FechaLanzamiento) >= new Date(fechaMinima) && new Date(juego.FechaLanzamiento) <= new Date(fechaMaxima)
            );
        }

        // Ordenar por título alfabéticamente
        if (ordenAlfabetico === 'asc') {
            juegosFiltrados = juegosFiltrados.sort((a, b) => a.Titulo.localeCompare(b.Titulo));
        } else if (ordenAlfabetico === 'desc') {
            juegosFiltrados = juegosFiltrados.sort((a, b) => b.Titulo.localeCompare(a.Titulo));
        }

        if (selectedYear !== '') {
            juegosFiltrados = juegosFiltrados.filter(juego =>
                new Date(juego.FechaLanzamiento).getFullYear().toString() === selectedYear
            );
        }

        setFilteredJuegos(juegosFiltrados);
    }, [selectedCategoria, juegos, setFilteredJuegos, precioMinimo, precioMaximo, fechaMinima, fechaMaxima, ordenAlfabetico, selectedYear]);

    const handleCategoriaChange = (e) => {
        setSelectedCategoria(e.target.value);
    };
    const handleOrdenAlfabeticoChange = (e) => {
        setOrdenAlfabetico(e.target.value);
    };

    const handleFechaMinimaChange = (e) => {
        setFechaMinima(e.target.value);
    };

    const handleFechaMaximaChange = (e) => {
        setFechaMaxima(e.target.value);
    };
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    return (
        <>
            <div className='font-bold'>
                <Button
                    onClick={toggleSidebar}
                    className="bg-fuchsia-600 hover:bg-fuchsia-400  text-white px-4 py-2 rounded"
                >
                    Filtros
                </Button>

                <div
                    className={`fixed top-0 left-0 h-full estilo text-white w-64 transform z-50 ${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
                >
                    <Button
                        onClick={toggleSidebar}
                        className="absolute top-4 right-4 "
                    >
                    <IoCloseCircle className="w-8 h-8"  />
                    </Button>
                    <div className="p-4">
                        <h2 className="text-2xl mb-4">Filtros</h2>
                        <h1 className="text-lg font-semibold mb-4">Categorías</h1>
                        <select
                            value={selectedCategoria}
                            onChange={handleCategoriaChange}
                            className="bg-fuchsia-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                        >
                            <option value="">Todas</option>
                            {categoriasUnicas.map((categoria, index) => (
                                <option key={index} value={categoria.trim()}>
                                    {categoria.trim()}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="p-4">
                        <h1 className="text-lg font-semibold mb-4">Filtrar por Año de Lanzamiento</h1>
                        <select
                            value={selectedYear}
                            onChange={handleYearChange}
                            className="bg-fuchsia-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                        >
                            <option value="">Todos los años</option>
                            {Array.from({ length: new Date().getFullYear() - 1999 }, (_, index) => (
                                <option key={index} value={String(new Date().getFullYear() - index)}>
                                    {new Date().getFullYear() - index}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="p-4">
                        <h1 className="text-lg font-semibold mb-4">Ordenar por Título</h1>
                        <select
                            value={ordenAlfabetico}
                            onChange={handleOrdenAlfabeticoChange}
                            className="bg-fuchsia-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                        >
                            <option value="">Ninguno</option>
                            <option value="asc">A-Z</option>
                            <option value="desc">Z-A</option>
                        </select>
                    </div>
                    <div className="p-4">
                        <h1 className="text-lg font-semibold  mb-4">Rango de Precios</h1>
                        <div className="w-[200px] ">
                            <div className="flex items-center ">
                                <InputText value={precioMinimo} onChange={(e) => setPrecioMinimo(e.target.value)} className="w-24 text-black" />
                                <Slider value={precioMinimo} onChange={(e) => setPrecioMinimo(e.value)} className="w-full ml-4" />
                            </div>
                            <div className="flex items-center mt-4">
                                <InputText value={precioMaximo} onChange={(e) => setPrecioMaximo(e.target.value)} className="w-24 text-black" />
                                <Slider value={precioMaximo} onChange={(e) => setPrecioMaximo(e.value)} className="w-full ml-4" />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h1 className="text-lg font-semibold mb-4">Filtrar por Fecha de Lanzamiento</h1>
                        <div className="flex items-center">
                            <InputText value={fechaMinima} onChange={handleFechaMinimaChange} placeholder="Desde" className="w-24 text-black" />
                            <span className="mx-2">-</span>
                            <InputText value={fechaMaxima} onChange={handleFechaMaximaChange} placeholder="Hasta" className="w-24 text-black" />
                        </div>
                    </div>
                    
                </div>
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={toggleSidebar}
                    ></div>
                )}
            </div>
        </>
    );
};

export default Canvas;
