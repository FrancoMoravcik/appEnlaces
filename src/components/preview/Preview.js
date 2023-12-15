/***** IMPORTACIONES *****/
import "./Preview.css"
import Celular from "../celular/Celular"
import { useLinkContext } from '../../context/LinkProvider.js';

/***** LOGICA *****/

const Preview = ()  => {

  const { linkSections } = useLinkContext();

return (
   <main className="main-preview">

    <section className="seccion-btn-preview">
      <div className="div-btn-preview">
        <button className="btn-preview-1">Back to Editor</button>
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