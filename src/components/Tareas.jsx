import React from 'react'
import '../index.css';


const Tareas = ({tareas, setTareas, setEditarComp, setEditar}) => {

   
    const eliminar = (id) => {
        const index = tareas.findIndex(tarea => tarea.id === id);
        console.log(index);
        tareas.splice(index, 1);
        setTareas([
            ...tareas
        ])
    }

    const editar = (id) => {
        setEditarComp(true);
        const index = tareas.findIndex(tarea => tarea.id === id);
        setEditar({
            index,
            descripcion : tareas[index].descripcion,
            fecha : tareas[index].fecha
        })        
    }

    return (
        <>
            
        {
            tareas.map((tarea) => {
                
                return(
                    
                    <tr key={tarea.id}>
                    <td>{tarea.descripcion}</td>
                    <td>{tarea.fecha}</td>
                    <td><button onClick={()=> {eliminar(tarea.id); }}>Eliminar</button><button onClick={() => editar(tarea.id)}>Editar</button></td>
                    </tr>
                    
                )

            })
        } 
            
        </>
    )
}

export default Tareas
