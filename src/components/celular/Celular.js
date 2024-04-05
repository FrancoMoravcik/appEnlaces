/***** IMPORTACIONES *****/
import "./Celular.css"
import { useLinkContext } from "../../context/LinkProvider";
/***** LOGICA *****/

const Celular = () => {

    const { linkSections, profileDetails, profileImage } = useLinkContext();

    return (
        <main className="main-celular">
            <img className="img-celular-main" src="img/celular.png" alt="celular"></img>
            <section className="seccion-contenedor-celular">
                <div className="div-1-celular">
                    
                 
                        <div className={profileImage === null ? 'div-img-perfil' : 'div-img-perfil-data'}>
                            <img className='img-perfil' src={profileImage ? URL.createObjectURL(profileImage) : "ruta/a/imagen/por/defecto.png"} alt="perfil" />
                        </div>
                            <h3 className={profileDetails.firstName === '' ? 'h3-div-1' : 'h3-div-1-data'}>{`${profileDetails.firstName} ${profileDetails.lastName}`}</h3>
                            <h5 className={profileDetails.email === '' ? 'h5-div-1' : 'h5-div-1-data'}>{profileDetails.email}</h5>
                      
                   
                    
                </div>

                <div className="div-2-celular">

                    {linkSections && linkSections.map((linkSection) => (
                        <a key={linkSection.id} target="_blank" className={`a-div-2-celular a-${linkSection.selectedPlatform}`} href={linkSection.link}>
                            <img className={`img-marca img-${linkSection.selectedPlatform}`} src={`img/${linkSection.selectedPlatform}B.png`} alt="marca"></img>{linkSection.selectedPlatform}
                            <img className={`img-flecha img-flecha-${linkSection.selectedPlatform}`} src="img/flecha-correcta.png" alt="url"></img>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    )
}

/***** EXPORTACIONES *****/

export default Celular