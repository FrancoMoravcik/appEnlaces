/***** IMPORTACIONES *****/
import "./Links.css"

/***** LOGICA *****/

const Links = ()  => {
return (
    <main className="main-links">

        <section className="seccion-links-1">

            <div className="div-1-seccion-1">
             <h2>Customize your links</h2>
             <h4 className="h4-seccion-1">Add/edit/remove links below add then share all your profiles with the world</h4>
            </div>

            <div className="div-2-seccion-1">
             <button className="button-seccion-1">+ Add new link</button>
            </div>

        </section>

        <section className="seccion-links-2">
        <form className="form-seccion-2">

            <div className="div-1-form-seccion-2">
                <h3 className="h3-seccion-2"><img className="imgLinks" src="img/moodboardFenice5.png"></img>Link <span> #1</span></h3>
                <button className="button-seccion-2">Remove</button>
            </div>

            <div className="div-2-form-seccion-2">
                <label className="label-seccion-2">Platform</label>
                <select className="select-seccion-2">
                    <option>Discord</option>
                    <option>Facebook</option>
                    <option>GitHub</option>
                    <option>Gmail</option>
                    <option>Instagram</option>
                    <option>Linkedin</option>
                    <option>Pinterest</option>
                    <option>Snapchat</option>
                    <option>Telegram</option>
                    <option>TikTok</option>
                    <option>Twich</option>
                    <option>Twitter</option>
                    <option>YouTube</option>
                </select>
            </div>

            <div>
                
            </div>

        </form>  
        </section> 
    </main>
)
}

/***** EXPORTACIONES *****/

export default Links