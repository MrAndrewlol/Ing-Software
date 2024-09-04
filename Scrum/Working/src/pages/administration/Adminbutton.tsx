import { IonButton, IonToast } from '@ionic/react';
import CryptoJS from 'crypto-js';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './loginad.css';
import { Existing_admin } from '../../controller/Admin_Controller';

interface ContainerProps { 
    dpi: string, 
    password: string, 
}

const Adminbutton: React.FC<ContainerProps> = ({ 
    dpi, 
    password, 
}) => {
    const [message, setMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const history = useHistory();

    

    const handleClick = async () => {
        if (dpi != "" || password != "") {

            const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
            console.log(`hashed pass: ${hashedPassword}`);
            console.log(dpi)


            

            try {
                const login = await Existing_admin(dpi, CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex));
                if (login) {
                    
                    history.push(`/dash_admin?dpi=${dpi}`);
                } else {
                    console.log("Usuario no encontrado");
                }

            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            setMessage("DPI o Contraseña incorrectos");
            setShowToast(true); // Show the toast with the error message
        }
    };    

    return (
        <>
            <IonButton id='loginbut' onClick={handleClick} className="buttoning">
                Iniciar Sesion
            </IonButton>
            <IonToast
                className="custom-toast"
                style={{ textAlign: "center" }}
                isOpen={showToast}  // Controlled by state
                onDidDismiss={() => setShowToast(false)} // Reset toast visibility
                message={message}
                duration={2000}
                position="top"
            />
        </>
    );
};

export default Adminbutton;
