
import Enlace from "./Enlace";
import "./style/Inicio.css"
import {CiUser, CiSettings} from "react-icons/ci"
import { useState, useEffect } from "react";
import Api from "./Api";



const Inicio = () => {

  const [gifs, setGifs] = useState([]);


  useEffect(() => {
    Api({keyword : "gato"}).then(gifs => setGifs(gifs))
   
  }, [])


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
  <div>
  <input
        type="text"
        placeholder="Que estas buscando"
   
      />
    </div>
  </section>
  <section className="user-home">
   <a href="#"> <CiUser /> </a>
   <a href="#"> <CiSettings /> </a>
  </section>
   </header>

<Enlace />

     <article className="container">
   {
     gifs.map(gif =>{
       return <div key={gif.id}>
         <img src={gif.url} />
         <p>{gif.title}</p>
       </div>
     })

   }

 

     </article>

      </main>


      
      </>
     );
}
 
export default Inicio;