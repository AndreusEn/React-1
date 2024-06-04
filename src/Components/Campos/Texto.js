import './Texto.css'
import { useState } from 'react'

const CampoTexto = (props) => {

    const {type = "Text"}=props

    const [valor,ActualizarValor] = useState("")

    const placeholdermoddificado = `${props.placeholder} Por favor `

    const manejarCambio = (e) => {

        props.ActualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
            <label> {props.titulo} </label>
            <input placeholder={placeholdermoddificado} 
            required={props.required} value={props.valor}
             onChange={manejarCambio} type={type}/>    
       </div>
}

export default CampoTexto