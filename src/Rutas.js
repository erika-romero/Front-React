import { Routes, Route } from 'react-router';
import Main from './ciclo4/components/pages/Main';
import Productos from './ciclo4/components/pages/Productos';
import Catalog from './ciclo4/components/pages/Catalog'
function Rutas(){
    return <div className="md:w-2/5 xl:w-4/5 p-6"> 
    <Routes>
	                <Route path="/" exact element={<Main/>}/>
	                <Route path="/Productos" exact element={<Productos/>}/>
                    <Route path="/Catalog" exact element={<Catalog/>}></Route>
	            </Routes>
     </div>
}
export default Rutas;