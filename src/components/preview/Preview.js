/***** IMPORTACIONES *****/
import "./Preview.css"
import Celular from "../celular/Celular"
import { useLinkContext } from '../../context/LinkProvider.js';
import { Link } from 'react-router-dom'

/***** LOGICA *****/

const Preview = ()  => {

  const { linkSections } = useLinkContext();

return (
   <main className="main-preview">

    <section className="seccion-btn-preview">
      <div className="div-btn-preview">
        <Link className="btn-preview-1" to={'/links'}>Back to Editor</Link>
        <button className="btn-preview-2">Share Link</button>
      </div>
    </section>

    <section className="seccion-celular-preview">
    <Celular linkSections={linkSections}></Celular>
    </section>

   </main> 
)
}

/***** EXPORTACIONES *****/

export default Preview