import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import EditarForm from './components/EditarForm';
import ListaTareas from './components/ListaTareas';

function App() {

  const [tareas, setTareas] = useState([]);
  const [editarComp, setEditarComp] = useState(false);
  const [editar, setEditar] = useState({
    index: 0,
    descripcion: "",
    fecha: ""
  })

  return (
    <>
      <div className="App">
          <Header
            titulo="CRUD"
          />
          {
            editarComp ?
            <EditarForm
              setEditar={setEditar}
              editar={editar}
              tareas={tareas}
              setTareas={setTareas}
              setEditarComp={setEditarComp}
            />
            :
            <Formulario
            tareas={tareas}
            setTareas={setTareas}
          />
          }
        

          
        </div>
        {
          tareas.length === 0 ? 
          
          <h3 style={{textAlign:"center", color: "red"}}>No hay tareas registradas</h3> 

          :
          <ListaTareas
              tareas={tareas}
              setTareas={setTareas}
              setEditarComp={setEditarComp}
              editar={editar}
              setEditar={setEditar}
        /> 
        }
        
        
    </>
  );
}

export default App;
