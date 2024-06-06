import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';
import MiOrg from './Components/MiOrg/MiOrg';
import Equipo from './Components/Equipo/Equipo';
import { useState } from 'react';
import FooterCom from './Components/Footer/Footer';
import {v4 as uuid } from "uuid";
import ColaboradoresJS from './Components/Colaboradores/Colaboradores';

function App() {

  const [mostrarForm,ActualizarForm] = useState (true)
  const[Colaboradores,ActualizarColaborador] = useState([])
  const [equipo, ActualizarEquipo ] = useState([
    {id :uuid(),
     titulo: "Programacion",
     ColorPrimario: "#57c278",
     ColorSecundario:"#D9f7E9",
    },
    {id :uuid(),
    titulo: "Front end",
    ColorPrimario: "#82CFFA",
    ColorSecundario:"#E8F8FF",
   },
   {id :uuid(),
   titulo:"Patrones",
   ColorPrimario: "#A6D157",
   ColorSecundario:"#F0F8E2",
  },
 ]
)

  const cambiarEstado =() =>{
    ActualizarForm(!mostrarForm)
  }

  //Registro

  const RegistrarCol = (Colaborador) => {
    console.log ("Prueba", Colaborador)
    //spread operator los ... hace la copia los valores del arreglo
    ActualizarColaborador([...Colaboradores, Colaborador])
  }


  //Eliminar

  const eliminarColaborador = (id) =>{
    console.log("Eliminado" , id)
    const deletColab = Colaboradores.filter((colaborador) => colaborador.id !== id)
    ActualizarColaborador (deletColab)
  } 

  //Actualizar Color

  const actualizarColor = (color,id) => {
    //console.log("Actualizar", color, id)
    const equiposActualizados = equipo.map((equipo) =>{
      if (equipo.id===id) {equipo.ColorPrimario=color} 
      return equipo
    })

    ActualizarEquipo(equiposActualizados)
  }


  //Crear queipos
  const nuevosEquipos = (nuevoEquipo)=>{
    console.log(nuevoEquipo)
    ActualizarEquipo([...equipo,{...nuevoEquipo, id:uuid()}])
  }

  //Like

  const Like = (id) =>{
    console.log ("Like",id)
    const LikeColaborador = Colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    ActualizarColaborador(LikeColaborador)
  }


// {mostrarForm ===true? <Formulario/> : <div></div>}

// si mostrarForm es igual a true, se muestra formulario en caso contrario dame un div 

  return (

    <Router>
          <div>
      <Header/>

      <Routes>
        
        <Route path='/' element={<MiOrg cambiarEstado={cambiarEstado}></MiOrg>} />

        <Route path='/Agregar' 
        
        element={mostrarForm ===true ? 
        <Formulario equipo={equipo.map((equipo)=> equipo.titulo)} 
        RegistrarCol={RegistrarCol} nuevosEquipos={nuevosEquipos} />
        : <></>} />

       <Route path='/*' element={<h1>NO EXISTE MMHUEVO</h1>} />
      
      </Routes>    

      {   
        equipo.map( (equipo) =>  <Equipo datos={equipo} key={equipo.titulo} 
        Colaboradores={Colaboradores.filter(colaborador => colaborador.equipo===equipo.titulo ) } 
        eliminarColaborador ={eliminarColaborador}
        actualizarColor={actualizarColor}
        Like={Like}
        />
        )
      } 
      
      <FooterCom/>
      </div>
    </Router>

  );
}

export default App;
