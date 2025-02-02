import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,

} from "@ionic/react";
import { Getbanusers } from '../../../controller/Admin_Controller';
import "../../../theme/variables.css";
import "./userlist.css"
import {slitdate} from './adminfunctions'

interface Cuenta {
  idsuspend: string;
  dpi: string;
  estado: string;
  fechainicio: string;
  fechaban: string;
}


const Desban: React.FC = () => {

  const [cuentas, setcuentas] = useState<Cuenta[]>([])

  React.useEffect(() => {
    const fetchReports = async () => {
      try {
        const jhason: Cuenta[] = await Getbanusers();
        if (Array.isArray(jhason) && jhason.length > 0) {
          setcuentas(jhason);
        }
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      }
    };

    fetchReports();

    for (const index in cuentas) {
      cuentas[index].fechainicio = slitdate(cuentas[index].fechainicio)
      cuentas[index].fechaban = slitdate(cuentas[index].fechaban)
    }

  }, []);




  return (
    <>
      <IonGrid>
        <IonRow className="usuario_mod">
          <IonCol className="headermod">
            DPI
          </IonCol>
          <IonCol className="headermod">
            Estado
          </IonCol>
        </IonRow>
        {cuentas.map((item, index) => (
          <IonRow key={index}>
            <IonCol className="userCOl">{item.dpi}</IonCol>
            <IonCol className="userCOl">Pendiente</IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </>

  );
};

export default Desban;


