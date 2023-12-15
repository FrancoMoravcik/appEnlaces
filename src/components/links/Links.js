import { useLinkContext } from '../../context/LinkProvider';
import Celular from '../celular/Celular';
import './Links.css';

const Links = () => {
  const { linkSections, updateLinkSections } = useLinkContext();

  const handleAddLinkSection = () => {
    const newLinkSection = { id: linkSections.length + 1, platform: '', link: '', selectedPlatform: '' };
    updateLinkSections([...linkSections, newLinkSection]);
  };

  const handleRemoveLinkSection = (id) => {
    const updatedLinkSections = linkSections.filter(linkSection => linkSection.id !== id);
    updateLinkSections(updatedLinkSections);
  };

  const handlePlatformChange = (id, value) => {
    const updatedLinkSections = linkSections.map(linkSection => {
      if (linkSection.id === id) {
        return { ...linkSection, platform: value, selectedPlatform: value };
      }
      return linkSection;
    });
    updateLinkSections(updatedLinkSections);
  };

  const handleLinkChange = (id, value) => {
    const updatedLinkSections = linkSections.map(linkSection => {
      if (linkSection.id === id) {
        return { ...linkSection, link: value };
      }
      return linkSection;
    });
    updateLinkSections(updatedLinkSections);
  };


    return (
        <main className="main-links">
            <section className="seccion-celular">
                <Celular linkSections={linkSections}/>
            </section>

            <section className="seccion-urls">
                <section className="seccion-links-1">
                    <div className="div-1-seccion-1">
                        <h2>Customize your links</h2>
                        <h4 className="h4-seccion-1">Add/edit/remove links below add then share all your profiles with the world.</h4>
                    </div>

                    <div className="div-2-seccion-1">
                        <button className="button-seccion-1" onClick={handleAddLinkSection}>+ Add new link</button>
                    </div>
                </section>

                <form className="form">
                    {linkSections.map(linkSection => (
                        <section key={linkSection.id} className="seccion-form">
                            <div className="div-1-form">
                                <h3 className="h3-form">
                                    <img className="imgLinks" src="img/lineas.png" alt=""></img>
                                    Link <span> #{linkSection.id}</span>
                                </h3>
                                <button className="button-form" onClick={() => handleRemoveLinkSection(linkSection.id)}>Remove</button>
                            </div>

                            <div className="div-2-form">
                                <label className="label-form">Platform <img className="img-marca" src={`img/${linkSection.selectedPlatform}.png`} alt=""></img></label>
                                <select
                                    value={linkSection.platform}
                                    onChange={(e) => handlePlatformChange(linkSection.id, e.target.value)}
                                    className="select-form">
                                    <option value="" disabled>Select an option</option>
                                    <option value="discord">Discord</option>
                                    <option value="facebook">Facebook</option>
                                    <option value="github">GitHub</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="linkedin">Linkedin</option>
                                    <option value="pinterest">Pinterest</option>
                                    <option value="snapchat">Snapchat</option>
                                    <option value="telegram">Telegram</option>
                                    <option value="tiktok">TikTok</option>
                                    <option value="twitch">Twitch</option>
                                    <option value="twitter">Twitter</option>
                                    <option value="youtube">YouTube</option>
                                </select>
                            </div>

                            <div className="div-3-form">
                                <label className="label-form">Link</label>
                                <input className="input-form" name="link" type="text" placeholder="&#x1F517;" value={linkSection.link} onChange={(e) => handleLinkChange(linkSection.id, e.target.value)}></input>
                            </div>
                        </section>
                    ))}

                    <button className="btn-save" onClick={handleAddLinkSection}>Save</button>
                </form>
            </section>
        </main>
    );
};

export default Links;