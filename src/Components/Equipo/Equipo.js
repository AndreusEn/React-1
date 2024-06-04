import './equipo.css'
import ColaboradoresJS from '../Colaboradores/Colaboradores'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

    //Code destructurado o Destructuracion de el array en App.js  
    const {ColorPrimario, ColorSecundario, titulo, id} = props.datos

    //Colores de los fondos de cada equipo
    const EstiloBanckground = { backgroundColor: hexToRgba(ColorPrimario,0.6) }

    //Colores de las lineas de los h3
    const EstilosPrimarios= {borderColor:ColorPrimario}

    const {Colaboradores, eliminarColaborador, actualizarColor,Like} = props

    // la funcion lengt sirve para ver la longitud del arreglo, 
    //lo que nos ayuda a saber cuantos elementos existen en el arreglo, 
    //nos sirve para hacer un filtro con componentes ternarios
    
    //console.log(Colaboradores.length >0 )

    return Colaboradores.length >0 ? 
    
    <section className='equipo' style={EstiloBanckground} >

        <input 
        type='color'
         className='ColorMod'
         value={ColorPrimario}
        onChange={(Event) =>{
        actualizarColor(Event.target.value, id)
        }}/>

        <h3 style={EstilosPrimarios} >{titulo}</h3>
        
        <div className="colaboradores">
            {
            Colaboradores.map((Colaborador, index) => <ColaboradoresJS datos={Colaborador} key={index}
            ColorPrimario= {ColorPrimario}
            eliminarColaborador={eliminarColaborador}
            Like={Like}
            />)
            }
        </div>
    </section> :<></>
}


export default Equipo