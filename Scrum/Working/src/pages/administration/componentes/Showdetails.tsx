import React, { useState } from "react";
import {
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonIcon,
  useIonModal,
  IonSelect,
  IonSelectOption,
  IonRange,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonLabel,
  IonPopover,
  IonDatetime,
} from '@ionic/react';
import { calendar, calendarOutline, closeOutline } from 'ionicons/icons';

import './mod_modaling.css'
import { Getallbannedusers } from "../../../controller/Admin_Controller";

interface Persona {
  idsuspend: string;
  dpi: string;
  estado: boolean;
  fechainicio: string;
  unban: string;
  razon:string;
}


interface ModalExampleProps {
  onDismiss: (data?: any, role?: string) => void;
  data?: Persona;
}

const ModalExample: React.FC<ModalExampleProps> = ({ onDismiss, data }) => {

  const [showPopover, setShowPopover] = useState(false);
  const [changedate, setchangedate] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);



  const handleDateChange = (e: CustomEvent) => {
    
    const date = e.detail.value;
    setSelectedDate(date);
    setShowPopover(false);  // Close the popover after selecting the date
    setchangedate(true);

  };

  const handleButtonClick = () => {
    console.log('Button clicked!');
    // Add other actions you want to perform on click
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="mod-modalToolbar">
          <IonButtons slot="start"></IonButtons>
          <IonTitle className="showdetail_titulo"> DPI BAN: <b>{data?.dpi}</b></IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onDismiss(null, 'cancel')}>
              <IonIcon className="closingicono" icon={closeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonGrid>
          <IonRow>
            <IonCol><IonItem>Fecha Inicio: <br></br> {data?.fechainicio} </IonItem></IonCol>
            <IonCol><IonItem id={data?.dpi}>Fecha a Desbloquear: <br></br> {selectedDate || data?.unban} <IonButton slot="end"  onClick={() => setShowPopover(true)} className="iconodate">
            <IonIcon slot="icon-only" icon={calendar}></IonIcon>  
            </IonButton></IonItem></IonCol>
          </IonRow>
      </IonGrid>

      <IonPopover
        isOpen={showPopover}
        onDidDismiss={() => setShowPopover(false)}
        > <IonDatetime onIonChange={handleDateChange}></IonDatetime>
      </IonPopover>  

  

        <IonLabel className="descprio"><b>Descripción</b></IonLabel>
        <br></br>
        
        <IonItem className="textrazon">{data?.razon}</IonItem>
        <br></br>
        {data?.estado === false ? (
          <IonText>Estado: <b>Pendiente</b></IonText>
        ) : (
          <IonText>Estado: <b>Revisado</b></IonText>
        )}
        <br></br>
        {changedate ? (
          <>
          <br />
          <div style={{display:'flex'}}>
            <input placeholder="Desbloquear Cuenta" className="botonconfirm" style={{backgroundColor:'var(--white)'}} ></input>
            <IonButton className="botonconfirm" onClick={handleButtonClick}>Extender Bloqueo</IonButton>
          </div>
          <p style={{color:'red'}}>Escribir "desbloquear cuenta" para confirmar</p>
          </>
        ) : (
          <IonButton className="botonDesCuenta" onClick={handleButtonClick}>Desbloquear Cuenta</IonButton>
        )}

      </IonContent>
    </IonPage>
  );
};

function Showsuspend_D() {
  const [selectedItem, setSelectedItem] = useState<Persona | null>(null);
  const [present, dismiss] = useIonModal(ModalExample, {
    onDismiss: (data: any, role: string) => dismiss(data, role),
    data: selectedItem, // Pass the selected item data
  });

  const [cuentas, setcuentas] = useState<Persona[]>([]);

  React.useEffect(() => {
    const fetchReports = async () => {
      try {
        const jhason: Persona[] = await Getallbannedusers();
        if (Array.isArray(jhason) && jhason.length > 0) {
          setcuentas(jhason);
        }
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      }
    };
    fetchReports();
  }, []);




  function openModal(item: Persona) {
    setSelectedItem(item); // Set the selected item in state
    present();
  }

  return (
    <>
    
      {cuentas.map((item, index) => (
        <button
          key={index}
          style={{
            backgroundColor: index % 2 === 0 ? 'var(--ion-color-tertiary)' : '#ffffff',
            color: index % 2 === 0 ? 'var(--white)' : 'var(--black)',
          }}
          className="usermodal"
          onClick={() => openModal(item)}
        >
          <div className="separacion">
            <p>{item.dpi}</p>
            <p>{item.unban}</p>
          </div>
        </button>
      ))}
    </>
  );
}

export default Showsuspend_D;


{/* <IonButton onClick={() => onDismiss(inputRef.current?.value, 'confirm')} strong={true}>
Confirm
</IonButton> */}


{/* 
        <IonPopover
          style={{ textAlign: 'center' }}
          isOpen={showPopoverconfirm}
          onDidDismiss={() => setShowPopoverconfirm(false)}
        >
          <p>Estas seguro de extender la fecha?</p>
          <IonGrid>
            <IonRow>
              <IonCol>
              <IonButton onClick={() => handleCancel()}>No</IonButton>
              </IonCol>
              <IonCol>
                <IonButton onClick={() => handleconfirm}>Si</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonPopover> */}

        