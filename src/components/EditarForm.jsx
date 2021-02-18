import React, {useState} from 'react'
import Alerta from './Alerta';

const EditarForm = ({setEditar, editar, tareas, setTareas, setEditarComp}) => {

  

    const [alerta, setAlerta] = useState(false);

    const handleChange = (e) => {  
        setEditar({
            ...editar,
            [e.target.name] : e.target.value
        })
    }

    const editarTarea = (e) => {
        e.preventDefault();
        console.log(editar.index);
        tareas[editar.index].descripcion = editar.descripcion;
        tareas[editar.index].fecha = editar.fecha;
        setTareas([
            ...tareas,     
        ])
        setEditarComp(false);
    }

    return (
        <>
            <form onSubmit={editarTarea}>
                <input type="text" onChange={handleChange} name="descripcion" placeholder="Descripcion" value={editar.descripcion}/>   
                <input type="date" onChange={handleChange} name="fecha" value={editar.fecha}/>
                <button type="submit">Editar</button>
            </form>
            {alerta ? <Alerta mensaje="Completa los campos para continuar"/> : null}
        </>
    )
}

export default EditarForm
