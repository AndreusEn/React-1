import './Opciones.css'

const ListaOpciones = (props) =>{


    const manejarCambio = (e) =>{
        props.ActualizarEquipo(e.target.value)
    }

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipo.map((equipo,index) =>{
                return <option key={index} value={equipo}> {equipo} </option>
            })}
        </select>
    </div>
}

export default ListaOpciones