import { Outlet, Link } from "react-router-dom";
import "./style/layout.css"


const Layout = () => {
  return (
    <>
      <nav className="list-nav">
        <ul className="list-ul">
        <section>
          <h4 className="list-h4">Fenix_comunity</h4>
          <hr />
        </section>
          <li>
            <Link to="/">
     
              Inicio
            </Link>
          </li>
          <li>
        
            <Link to="/publicaciones">Publicaciones</Link>
          </li>
          <li>
            <Link to="/notificaciones">Notificaciones</Link>
          </li>
        </ul>
        <ul className="list-ul">
       <section>
        <h4 className="list-h4">Actividades</h4>
        <hr />
       </section>
          <li>
            
            <Link to="/grupos">Grupos</Link>
          </li>
          <li>
          <Link to="/solicitudes">Solicitudes</Link>
          </li>
          <li>
          <Link to="/mesajes">Mensajes</Link>
          </li>
          <li>
          <Link to="/amigos">Amigos</Link>
          </li>
        </ul>
        <ul className="list-ul">
        <section>
        <h4 className="list-h4">Gmail</h4>
        <hr />
       </section>
         
          <li>
 
            <Link to="http://127.0.0.1:5500/correo.html">Enviar correo al creador</Link>
           </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;