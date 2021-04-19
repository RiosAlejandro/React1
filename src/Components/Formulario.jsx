import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import './Formulario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faUnlock, faLock} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'

const Formulario = () => {

    const { register, formState: {errors} , handleSubmit } = useForm();

    const onSubmit = (data) => {console.log(data);}

    return ( 
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="fotoFormulario">
                    <input type="file" name="imagen" />
                </div>
                <div className="camposNombre">
                    <div className="subCamposNombre">
                        <input 
                            placeholder= "First Name"
                            name="firstName"
                            {...register("firstName", {required: true, minLength: 2, maxLength: 20, pattern: /^[A-Za-z]+$/i} )}
                        />
                        {errors.firstName && "First name is required"}
                    </div>
                    <div className="subCamposNombre">
                        <input 
                            placeholder= "Last Name"
                            name="lastName"
                            {...register("lastName", {required: true, minLength: 2, maxLength: 20, pattern: /^[A-Za-z]+$/i})}
                        />
                        {errors.lastName && "Last name is required"}
                    </div>
                </div>
                <div className="camposFormulario">
                    <FontAwesomeIcon icon={faUser} />
                    <input 
                        placeholder= "Username"
                        name="username"
                        {...register("username", {required: true, minLength: 4, maxLength: 12})}
                    />
                    {errors.username && "Username is required"}
                </div>
                <div className="camposFormulario">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input 
                        placeholder= "Email"
                        name="email"
                        {...register("email", {required: true})}/*poner patron*/ 
                    />
                    {errors.email && "Email is required"}
                </div>
                <div className="camposFormulario">
                    <FontAwesomeIcon icon={faPhone} />
                    <input 
                        placeholder= "Tel. Number"
                        name="telNumber"
                        {...register("telNumber", {required: false})}
                    />
                </div>
                <div className="camposFormulario">
                    <FontAwesomeIcon icon={faUnlock} />
                    <input 
                        placeholder= "Password"
                        name="password"
                        {...register("password", {required: true, minLength: 6, maxLength: 30})}
                    />
                    {errors.password && "password is required"}
                </div>
                <div className="camposFormulario">
                    <FontAwesomeIcon icon={faLock} />
                    <input 
                        placeholder= "Confirm Password"
                        name="confirmPassword"
                        
                    />
                    {errors.confirmPassword && "passwords do not match"}
                </div>
                <div className="botonFormulario">
                    <button>Ok</button>
                </div>
            </form>
        </Fragment>
     );
}
 
export default Formulario;