/***** IMPORTACIONES *****/
import "./Celular.css"

/***** LOGICA *****/

const Celular = ()  => {
return (
   <main className="main-celular">
       <img className="img-celular-main" src="img/celular.png"></img>
       <section className="seccion-contenedor-celular">
        <div className="div-1-celular">
            <div className="div-img-perfil">
                <img className="img-perfil" src="img/ISO-DOGGYDELI.png"></img>
            </div>
            
            <h3 className="h3-div-1">Franco Moravcik</h3>

            <h5 className="h5-div-1">francomoravcik12@gmail.com</h5>
        </div>

        <div className="div-2-celular">
              
            <a className="a-div-2-celular" href="https://chat.openai.com/c/7602f937-74d8-4977-b149-4fcffcc0db79"> <img className="img-marca" src="img/github.png"></img> GitHub <img className="img-flecha" src="img/flecha-correcta.png"></img></a>

    
        </div>
       </section>
   </main>
)
}

/***** EXPORTACIONES *****/

export default Celular