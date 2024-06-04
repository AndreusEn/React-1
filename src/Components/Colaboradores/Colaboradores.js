import "./Colaboradores.css"
import { IoCloseCircle, IoHeart , IoHeartOutline} from "react-icons/io5";

const ColaboradoresJS = (props) => {
    
    const {nombre,Puesto,foto,equipo, id, fav} = props.datos
    const{ColorPrimario, eliminarColaborador,Like} =props
    return  <div className="Colaborador" >
            <IoCloseCircle className="Eliminar" onClick={() => eliminarColaborador (id)}/>
            <div className="Encabezado" 
            style={{backgroundColor: ColorPrimario}} >
                <img src={foto} alt={nombre} />  
            </div>

            <div className="info" >
                <h4> {nombre }</h4>
                <h5> {Puesto} </h5>
            
               {fav ? <IoHeart color="red" onClick={()=>Like(id)}/> : <IoHeartOutline onClick={()=>Like(id)}/>}
               
            </div>        

    </div>
}

export default ColaboradoresJS