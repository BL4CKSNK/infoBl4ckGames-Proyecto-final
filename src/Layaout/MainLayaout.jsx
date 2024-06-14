import Footer from "../Components/Footer"
import Header from "../Components/Header"

 const MainLayaout = ({children})=>{
    //distribución principal de toda la página
    return(
        <>
           
              <Header />
              <div className="flex-grow max-w-screen-2xl mx-auto px-2 lg:px-5 mt-20 min-h-screen">
                  {children}
              </div>
              <Footer />
        
          
        </>
    )
}
export default MainLayaout