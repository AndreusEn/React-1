import "./MiOrg.css"

const MiOrg = (props) => {

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/Botão add-01 1.png" alt="ImagenBTN" onClick={props.cambiarEstado}></img>
    </section>
}

export default MiOrg