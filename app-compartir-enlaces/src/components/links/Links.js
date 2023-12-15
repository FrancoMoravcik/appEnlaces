/***** IMPORTACIONES *****/

import "./Links.css"
import Celular from "../celular/Celular"

/***** LOGICA *****/

const Links = () => {
    return (
        <main className="main-links">
            <section className="seccion-celular">
                <Celular></Celular>
            </section>


            <section className="seccion-urls">
                <section className="seccion-links-1">

                    <div className="div-1-seccion-1">
                        <h2>Customize your links</h2>
                        <h4 className="h4-seccion-1">Add/edit/remove links below add then share all your profiles with the world</h4>
                    </div>

                    <div className="div-2-seccion-1">
                        <button className="button-seccion-1">+ Add new link</button>
                    </div>

                </section>

                <form className="form">

                    <section className="seccion-form">
                        <div className="div-1-form">
                            <h3 className="h3-form"><img className="imgLinks" src="img/lineas.png"></img>Link <span> #1</span></h3>
                            <button className="button-form">Remove</button>
                        </div>

                        <div className="div-2-form">
                            <label className="label-form">Platform <img className="img-marca" src="img/gmail.png"></img></label>
                            <select className="select-form">
                                <option value="" disabled selected>Seleccionar una opción</option>
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

                        <div className="div-3-form">
                            <label className="label-form">Link</label>
                            <input className="input-form" name="link" type="text" placeholder="&#x1F517;"></input>
                        </div>
                    </section>

                    <section className="seccion-form">
                        <div className="div-1-form">
                            <h3 className="h3-form"><img className="imgLinks" src="img/lineas.png"></img>Link <span> #1</span></h3>
                            <button className="button-form">Remove</button>
                        </div>

                        <div className="div-2-form">
                            <label className="label-form">Platform <img className="img-marca" src="img/gmail.png"></img></label>
                            <select className="select-form">
                                <option value="" disabled selected>Seleccionar una opción</option>
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

                        <div className="div-3-form">
                            <label className="label-form">Link</label>
                            <input className="input-form" name="link" type="text" placeholder="&#x1F517;"></input>
                        </div>
                    </section>

                    <section className="seccion-form">
                        <div className="div-1-form">
                            <h3 className="h3-form"><img className="imgLinks" src="img/lineas.png"></img>Link <span> #1</span></h3>
                            <button className="button-form">Remove</button>
                        </div>

                        <div className="div-2-form">
                            <label className="label-form">Platform <img className="img-marca" src="img/gmail.png"></img></label>
                            <select className="select-form">
                                <option value="" disabled selected>Seleccionar una opción</option>
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

                        <div className="div-3-form">
                            <label className="label-form">Link</label>
                            <input className="input-form" name="link" type="text" placeholder="&#x1F517;"></input>
                        </div>
                    </section>


                    <button className="btn-save">Save</button>
                </form>
            </section>
        </main>
    )
}

/***** EXPORTACIONES *****/

export default Links