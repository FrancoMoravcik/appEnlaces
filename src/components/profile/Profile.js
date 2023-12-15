import Celular from "../celular/Celular";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { useLinkContext } from '../../context/LinkProvider.js';
import "./Profile.css";

const Profile = () => {

    const { linkSections , updateProfileDetails } = useLinkContext();

    const handleProfileDetailsChange = (event) => {
        const { name, value } = event.target;
        updateProfileDetails((prevProfileDetails) => ({
          ...prevProfileDetails,
          [name]: value
        }));
      };

    return (
        <main className='main-profile'>
            <section className='seccion-1-profile'>
                <Celular linkSections={linkSections}/>
            </section>

            <section className="seccion-2-container-profile-details">
                <section className="seccion-links-1">
                    <div className="div-1-seccion-1">
                        <h2>Profile details</h2>
                        <h4 className="h4-seccion-1">Add your details to create a personal touch to your profile.</h4>
                    </div>
                </section>

                <section className="seccion-details">
                    <div className='div-container-seccion-details'>
                        <div className="div-input-1-image">
                            <p className="p-1">Foto de perfil</p>
                        </div>
                        <div className="div-input-2-image">
                            <label className='label-image' htmlFor='image'>
                                <FontAwesomeIcon className="icon-image" icon={faImage} />
                                <p>Upload image</p>
                            </label>
                            <input id='image' name="profilePicture" type='file'
                            ></input>
                            <p className="p-2">image must be below 1024X1024px. Use format PNG, JPG o BMP.</p>
                        </div>
                    </div>

                    <form className='form-container-seccion-details'>
                        <div className="div-form">
                            <label className="label-div-form">First Name</label>
                            <input
                                type='text'
                                name="firstName"
                                onChange={handleProfileDetailsChange}
                            ></input>
                        </div>
                        <div className="div-form">
                            <label className="label-div-form">Last Name</label>
                            <input type='text'name="lastName"    onChange={handleProfileDetailsChange}
                            ></input>
                        </div>
                        <div className="div-form">
                            <label className="label-div-form">Email</label>
                            <input
                                type='email' name="email" onChange={handleProfileDetailsChange}
                            ></input>
                        </div>

                        <button className="btn-save-div-form">Guardar</button>
                    </form>
                </section>
            </section>
        </main>
    );
};

export default Profile;
