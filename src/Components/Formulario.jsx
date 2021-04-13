import React, { Fragment } from 'react';
import './Formulario.css'

const Formulario = () => {
    return ( 
        <Fragment>
            <form>
                <div className="fotoFormulario">
                    <input type="file" name="imagen" />
                </div>
                <div className="camposNombre">
                    <div className="subCamposNombre">
                        <input 
                            placeholder= "First Name"
                        />
                    </div>
                    <div className="subCamposNombre">
                        <input 
                            placeholder= "Last Name"
                        />
                    </div>
                </div>
                <div className="camposFormulario">
                    <span><i class="fas fa-hand-paper"></i></span>
                    <input 
                        placeholder= "Username"
                    />
                </div>
                <div className="camposFormulario">
                    <span></span>
                    <input 
                        placeholder= "Email"
                    />
                </div>
                <div className="camposFormulario">
                    <span></span>
                    <input 
                        placeholder= "Tel. Number"
                    />
                </div>
                <div className="camposFormulario">
                    <span></span>
                    <input 
                        placeholder= "Password"
                    />
                </div>
                <div className="camposFormulario">
                    <span></span>
                    <input 
                        placeholder= "Confirm Password"
                    />
                </div>
                <div className="botonFormulario">
                    <button>Ok</button>
                </div>
            </form>
        </Fragment>
     );
}
 
export default Formulario;