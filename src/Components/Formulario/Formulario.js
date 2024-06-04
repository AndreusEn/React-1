import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../Campos/Texto'
import ListaOpciones from '../ListaOpciones/Opciones'
import Boton from '../Boton/Boton'
import {v4 as uuid } from "uuid";

const Formulario = (props) => {

    const[nombre, ActualizarNombre] = useState("")
    const[Puesto,ActualizarPuesto] = useState("")
    const[equipo,ActualizarEquipo] = useState("")
    const[foto,ActualizarFoto] = useState("")

    const [titulo, ActualizarTitulo]= useState("")
    const [color, ActualizarColor]= useState("")

 

    const manejoenvio = (event) => {
        event.preventDefault()
        let DAE = {
            nombre,
            Puesto,
            foto,
            equipo,
            id:uuid(),
            fav:false        }
        props.RegistrarCol (DAE)
    }


    const {nuevosEquipos} = props
    const manejarEnvio = (event)=>{
        event.preventDefault()
        nuevosEquipos({titulo, ColorPrimario: color})

    }

    return <section className="formulario">
        <form onSubmit={manejoenvio}>
            <h2>
                Rellene el formulario para crear el colaborador
            </h2>
            <CampoTexto titulo='Nombre' placeholder='Ingrese el nombre' required valor ={nombre} ActualizarValor={ActualizarNombre} /> 

            <CampoTexto titulo='Puesto' placeholder='Ingrese el puesto' required valor={Puesto} ActualizarValor={ActualizarPuesto} />
            
            <CampoTexto titulo='Foto' placeholder='Ingrese url' required valor={foto} 
            ActualizarValor={ActualizarFoto}/>

            <ListaOpciones valor={equipo} ActualizarEquipo={ActualizarEquipo} 
            equipo={props.equipo} />
            
            <Boton texto="crear"/>
        </form>
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellene el formulario para crear el equipo
            </h2>
            <CampoTexto titulo='Equipo' placeholder='Ingrese el titulo del equipo' required valor ={titulo} ActualizarValor={ActualizarTitulo} /> 

            <CampoTexto titulo='Color' placeholder='Ingrese el color en hex' required valor={color} ActualizarValor={ActualizarColor} type="color" />
            <Boton texto=" Registrar Equipo"/>
        </form>
    </section>
}

export default Formulario