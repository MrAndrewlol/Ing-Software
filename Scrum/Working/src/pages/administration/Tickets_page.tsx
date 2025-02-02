import React, { useState } from "react";
import {
  IonTitle,
  IonContent,
  IonPage,

  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonButton,
  IonIcon,
  IonDatetime,
  IonPopover,

} from "@ionic/react";
import "./ticket_page.css";
import "../../theme/variables.css";
import Topheader from "./componentes/Topheader";
import { calendar, checkmark, close } from "ionicons/icons";
import { slitdate } from "./componentes/adminfunctions";
import { useMaskito } from "@maskito/react";
// Rediseno crear un nuevo componente donde menos de 600px se ponga un menu

// TICKET PARA VER LOS REPORTES. AHI PODES BANEAR A LA PERSONA
const Tickt_page: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);
  const [showPopover2, setShowPopover2] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>('DD-MM-YYYY');
  const [selectedDatefinal, setSelectedDatefinal] = useState<string | null>('DD-MM-YYYY');

  const dpiMask = useMaskito({
    options: {
      mask: [...Array(4).fill(/\d/), ' ', ...Array(5).fill(/\d/), ' ', ...Array(4).fill(/\d/)]
    }
  })


  const handleDateChange = (e: CustomEvent) => {

    const date = e.detail.value;
    setSelectedDate(slitdate(date));

    setShowPopover(false);  // Close the popover after selecting the date

  };

  const handleDateChangefinal = (e: CustomEvent) => {

    const date = e.detail.value;
    setSelectedDatefinal(slitdate(date));

    setShowPopover2(false);  // Close the popover after selecting the date

  };

  const jhason = [{
    "idreporte": '1',
    "dpiemisor": '15406406',
    "dpireportuser": '2860479',
    "contenido": "This is a sample content",
    "fecha": "2024-08-27T12:34:56Z"
  },
  {
    "idreporte": '2',
    "dpiemisor": '15406406',
    "dpireportuser": '2860479',
    "contenido": "This is a sample content",
    "fecha": "2024-08-27T12:34:56Z"
  }]


  return (
    <IonPage style={{ backgroundColor: 'white' }}>
      <Topheader></Topheader>
      <br></br>
      <IonContent>
        <IonTitle className="titulotickets">Tickets</IonTitle>
        <IonGrid>
          <IonRow>
            <IonCol><IonItem >DPI Reportado</IonItem></IonCol>
            <IonCol><IonItem>No. Ticket</IonItem></IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput
                  ref={async (dpiRef) => {
                    if (dpiRef) {
                      const input = await dpiRef.getInputElement()
                      dpiMask(input)
                    }
                  }}
                  placeholder="XXXX XXXXX XXXX"></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput placeholder="No. #"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol> Fecha Rango Inicial<br></br>
              <IonItem>{selectedDate}
                <IonButton onClick={() => setShowPopover(true)} slot="end" >
                  <IonIcon icon={calendar}></IonIcon>
                </IonButton>
              </IonItem>
            </IonCol>
            <IonCol>Fecha Rango Final <br></br>
              <IonItem onClick={() => setShowPopover2(true)}>{selectedDatefinal}
                <IonButton slot="end" >
                  <IonIcon icon={calendar}></IonIcon>
                </IonButton>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonButton>Buscar</IonButton>
          {jhason.map((item, index) => (
            <div key={index} className="containejob">
              <div className="jobtitle"><b>ID:</b> {item.idreporte}</div>
              <div>DPI Reportado: {item.dpiemisor}</div>
              <br>
              </br>
              <p className="descriptiontrabjo" >{item.contenido}</p>
              <div className="buttoncontainerjobstick">
                <div className="options_containertick">
                  <select className="optionm">
                    <option value="">Select an option</option>
                    <option value="86400">1 día</option>
                    <option value="604800">1 semana</option>
                    <option value="2592000">1 mes</option>
                    <option value="31536000">1 año</option>
                    <option value="custom">Personalizado</option>
                  </select>
                  <input placeholder="Segundos"></input>
                </div>

                <button className="disapprove">
                  <IonIcon icon={close}></IonIcon></button> <button className="green_approve"><IonIcon icon={checkmark}></IonIcon></button></div>
            </div>
          ))}
          <IonPopover
            isOpen={showPopover}
            onDidDismiss={() => setShowPopover(false)}
          > <IonDatetime presentation="date" onIonChange={handleDateChange}></IonDatetime>
          </IonPopover>
          <IonPopover
            isOpen={showPopover2}
            onDidDismiss={() => setShowPopover(false)}
          > <IonDatetime presentation="date" onIonChange={handleDateChangefinal}></IonDatetime>
          </IonPopover>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tickt_page;
