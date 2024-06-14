import LayaoutDasboard from "./LayaoutDasboard";

export default function LayaoutAdmin({ children }) {
    //distribución de las paginas del administrador
    return (
        <div className="flex flex-col md:flex-row gap-7 mt-36">
            <LayaoutDasboard />
            <div className="flex-grow p-6 bg-gray-100 rounded-lg shadow-xl">
                {children}
            </div>
        </div>
    );
}