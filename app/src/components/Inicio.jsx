
import Enlace from "./Enlace";
import "./style/Inicio.css"
import {CiUser, CiSettings} from "react-icons/ci"
import { useState, useEffect } from "react";





const Inicio = () => {

   const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState('');

  useEffect(() => {
    // Llamada a la API para obtener los datos
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setFilteredData(data); // Inicialmente, mostrar todos los datos
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilterCriteria(value);
    // Aplicar filtro a los datos
    const filtered = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  };


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
        placeholder="Filtrar por nombre"
        value={filterCriteria}
        onChange={handleFilterChange}
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
     <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

     </article>

      </main>


      
      </>
     );
}
 
export default Inicio;