
import Enlace from "./Enlace";
import "./style/Inicio.css"
import {CiUser, CiSettings} from "react-icons/ci"





const Inicio = () => {

    return ( 

      <>
      <main className="main-inicio">

   <header className="header-home">
  <ul className="link-ul">
   <li><a href="#">Novedades</a></li>
   <li><a href="#">Tareas</a></li>
   <li><a href="#">Estado</a></li>
  </ul>
  <section>
   <input type="search" placeholder="  que estas buscando?" />
  </section>
  <section className="user-home">
   <a href="#"> <CiUser /> </a>
   <a href="#"> <CiSettings /> </a>
  </section>
   </header>

<Enlace />


      </main>


      
      </>
     );
}
 
export default Inicio;