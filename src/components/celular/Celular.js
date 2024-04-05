import React from 'react';
import "./Celular.css"
import { useLinkContext } from "../../context/LinkProvider";

const Celular = () => {
    const { linkSections, profileDetails, profileImage } = useLinkContext();

    return (
        <main className="main-celular">
            <img className="img-celular-main" src="img/celular.png" alt="celular" />

            <section className="seccion-contenedor-celular">
                <div className="div-1-celular">
                    <div className={profileImage ? 'div-img-perfil-data' : 'div-img-perfil'}>
                        {profileImage &&
                            <img className='img-perfil' src={URL.createObjectURL(profileImage)} alt="perfil" />
                        }
                    </div>
                    <h3 className={profileDetails.firstName === '' ? 'h3-div-1' : 'h3-div-1-data'}>
                        {`${profileDetails.firstName} ${profileDetails.lastName}`}
                    </h3>
                    <h5 className={profileDetails.email === '' ? 'h5-div-1' : 'h5-div-1-data'}>
                        {profileDetails.email}
                    </h5>
                </div>

                <div className="div-2-celular">
                    {linkSections && linkSections.map((linkSection) => (
                        <a key={linkSection.id} target="_blank" rel="noopener noreferrer" className={`a-div-2-celular a-${linkSection.selectedPlatform}`} href={linkSection.link}>
                            <img className={`img-marca img-${linkSection.selectedPlatform}`} src={`img/${linkSection.selectedPlatform}B.png`} alt="red" />
                            {linkSection.selectedPlatform}
                            {linkSection.image && (
                                <img className={`img-flecha img-flecha-${linkSection.selectedPlatform}`} src={URL.createObjectURL(linkSection.image)} alt="url" />
                            )}
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Celular;
