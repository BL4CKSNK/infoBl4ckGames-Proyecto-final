import { FaSearch } from "react-icons/fa";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
export default function Buscador({searchTerm, handleSearch})
{
    return(
        <>
             <form className="max-w-md mx-auto mt-36">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <FaSearch />
                    </div>
                    <InputText type="search" id="default-search" value={searchTerm} onChange={handleSearch} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar juego..." required />
                    <Button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-fuchsia-600 hover:bg-fuchsia-400   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Buscar</Button>
                </div>
            </form>
        </>
    )
}