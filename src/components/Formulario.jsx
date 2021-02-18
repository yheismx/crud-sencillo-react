import React, {useState} from 'react';
import '../index.css';
import Alerta from './Alerta';


const Formulario = ({tareas, setTareas}) => {

    const [nuevaTarea, setNuevaTarea] = useState({
        id: 0,
        descripcion: "",
        fecha: ""
    });

    const [alerta, setAlerta] = useState(false);

    const handleChange = (e) => {  
        setNuevaTarea({
            ...nuevaTarea,
            [e.target.name] : e.target.value
        })
    }


    const agregarTarea = (e) => {
        e.preventDefault();
        if(nuevaTarea.descripcion != "" && nuevaTarea.fecha != ""){
            
            console.log('testing...');
            setTareas([
                ...tareas,
                {
                    id: tareas.length + 1,
                    descripcion : nuevaTarea.descripcion,
                    fecha : nuevaTarea.fecha
                }
            ]);

            setNuevaTarea({
                descripcion : "",
                fecha : ""
            })
            
            setAlerta(false);
        }
        else{
            setAlerta(true);
        }
        
    }

    return (
        <>
            <form onSubmit={agregarTarea}>
                <input type="text" onChange={handleChange} name="descripcion" placeholder="Descripcion" value={nuevaTarea.descripcion}/>   
                <input type="date" onChange={handleChange} name="fecha" value={nuevaTarea.fecha}/>
                <button type="submit">Agregar</button>
            </form>
            {alerta ? <Alerta mensaje="Completa los campos para continuar"/> : null}
        </>
    )
}

export default Formulario
