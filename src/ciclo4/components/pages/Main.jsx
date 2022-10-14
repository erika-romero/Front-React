import { Link } from "react-router-dom";
import '../../styles/main.css'
const Main = () => (
    <section className="row p-4">
      <div className="row mt-5" >
        <div className="container-fluid contenedor">
          <div className="box">
          <img src="https://cdn-icons-png.flaticon.com/512/2981/2981297.png" alt="" />
          <h2>Comercializadora "A tiro de as"</h2>
          </div>
          <div className="row center">
            <div className="col-md-6 card-deck">
              <Link to="/Catalog">
                  <h3>Catalogo de productos</h3>
              </Link>
            </div>
            <div className="col-md-6 ">
              <Link to="/Productos">
                <h3>Lista de productos</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
)
export default Main;