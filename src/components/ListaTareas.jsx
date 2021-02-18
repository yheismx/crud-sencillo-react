import React, {useEffect} from 'react'
import Tareas from './Tareas';
import '../index.css';



const ListaTareas = ({tareas, setTareas, setEditarComp, editar, setEditar}) => {

  
    return (
        <>
            <table>
                <thead>
                    <tr>
                    <th>Descripcion</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                <Tareas
                    tareas={tareas}
                    setTareas={setTareas}
                    setEditarComp={setEditarComp}
                    editar={editar}
                    setEditar={setEditar}
                />            
                   
                </tbody>
                
            </table>
            
        </>
    )
}

export default ListaTareas
