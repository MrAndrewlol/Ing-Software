import { IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './dashboard.css';
import GridWeek from '../components/Dashboard/GridWeek';
import { Month } from '../components/Calendar/MonthStruct';
import TextND from '../components/Txt/TextND';
import DoubleToggle from '../components/Miscellaneous/DoubleToggle';
import DateChanger from '../components/Calendar/DateChange';
import MonthCalendar from '../components/Calendar/MonthCalendar';
import { getHirings } from '../controller/ChatController';
import ModalStructure from '../components/Modals/ModalStructure';
import CloseContrat from '../components/Modals/Structures/CloseContrat';
import { get_contrat_by_moventh } from '../controller/UserController';

interface NoteData {
  idtrabajo: string;
  trabajador: string;
  dia: string;
  hora: string;
  descripcion: string;
  precio: string;
  foto: string;
  timestampcita: string
  pago: string
  imagen: string
  nombre: string
}

const Dashboard: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [typeCalendar, setTypeCalendar] = useState('semana');
  const currentDate = new Date();

  const [thisMonth, setThisMonth] = useState<Month>(new Month(0, 0));
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [week, setWeek] = useState<number>(0);
  const [weekDays, setWeekDays] = useState<string[]>([]);  // Estado para almacenar las fechas de la semana actual
  const [elementos, setElementos] = useState<NoteData[]>([]);  // Estado para almacenar los datos dinámicos
  const [hiringsMonth, setHiringsMonth] = useState<NoteData[]>([])

  const [showMessage, setShowMessage] = useState(false);
  const [selectedNote, setSelectedNote] = useState<NoteData>({
    idtrabajo: "",
    trabajador: "",
    dia: "",
    hora: "",
    descripcion: "",
    precio: "",
    foto: "",
    timestampcita: "",
    pago: "",
    imagen: "",
    nombre: ""
  });  // Estado para la Note seleccionada

  // Función para obtener los datos de hirings
  const fetchHirings = async () => {
    const dpi = localStorage.getItem('dpi'); 
    if (dpi != null) {
      const hirings = await getHirings(dpi);
      setElementos(hirings);    

    }
  };
  
  // Callback para actualizar hirings después de completar la acción en CloseContrat
  const handleUpdateHirings = () => {
    fetchHirings();  // Llama a la función que actualiza los datos dinámicos
    fetchMonth()

  };
  
  const fetchMonth = async () => {
    const data = localStorage.getItem('User')
      if (data) {
          const userData = JSON.parse(data) 
          const hirings = await get_contrat_by_moventh(userData.dpi, (thisMonth.monthNumber+1).toString())
          
          setHiringsMonth(hirings)
      }
  }

  useEffect(() => {
    setThisMonth(new Month(month, year));

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startDayOfWeek = startOfMonth.getDay();
    const offset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    const currentDay = currentDate.getDate();
    const weekNumber = Math.ceil((currentDay + offset) / 7);

    setWeek(weekNumber - 1);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setThisMonth(new Month(month, year));
  }, [month, year]);

  // useEffect para obtener los datos dinámicos
  useEffect(() => {
    fetchHirings();  
    fetchMonth()  
  }, []);


  if (width > 812) {
    return (
      <IonPage>
        <div className='background'>
          {showMessage && selectedNote && (
            <ModalStructure 
              setModal={setShowMessage} 
              content={
                <CloseContrat 
                  setShow={setShowMessage} 
                  trabajo={selectedNote.trabajador != undefined ? selectedNote.trabajador : selectedNote.nombre} 
                  pago={selectedNote.pago != undefined ? "Q."+selectedNote.pago : selectedNote.precio} 
                  foto={selectedNote.foto != undefined ? selectedNote.foto : selectedNote.imagen} 
                  descripcion={selectedNote.descripcion}
                  idtrabajo={selectedNote.idtrabajo}  
                  updateHirings={handleUpdateHirings}  // Pasar el callback para actualizar los hirings
                />
              } 
            />
          )}
          <div className='calendar-header'>
            <div className='center-right-element'>
              <b>
                <TextND text={thisMonth.name + ", " + thisMonth.year} size='big' hex='#000' />
              </b>
            </div>
            <div className='center-center-element'>
              <DoubleToggle typeCalendar={typeCalendar} setTypeCalendar={setTypeCalendar} />
            </div>
            <div className='center-left-element'>
              <DateChanger 
                week={week} 
                setWeek={setWeek} 
                monthMatrix={thisMonth.matrix} 
                month={month} 
                setMonth={setMonth} 
                year={year} 
                setYear={setYear} 
                typeCalendar={typeCalendar}
                setWeekDays={setWeekDays}  
              />
            </div>
          </div>
          {
            typeCalendar === 'semana' &&
            <GridWeek 
              notes={elementos} 
              weekDays={weekDays} 
              setModal={setShowMessage} 
              setSelectedNote={setSelectedNote}  
            />  
          }
          {
            typeCalendar === 'mes' &&
            <MonthCalendar 
              monthMatrix={thisMonth.matrix} 
              monthNumber={thisMonth.monthNumber+1}
              setModal={setShowMessage}
              setSelectedNote={setSelectedNote}  
              notes={hiringsMonth}
            />
          }
        </div>
      </IonPage>
    );
  } else {
    return (
      <IonPage>
        <div className='background'>
          {showMessage && selectedNote && (
            <ModalStructure 
              setModal={setShowMessage} 
              content={
                <CloseContrat 
                  setShow={setShowMessage} 
                  trabajo={selectedNote.trabajador} 
                  pago={selectedNote.precio} 
                  foto={selectedNote.foto} 
                  descripcion={selectedNote.descripcion}
                  idtrabajo={selectedNote.idtrabajo}  
                  updateHirings={handleUpdateHirings}  // Pasar el callback para actualizar los hirings
                />
              } 
            />
          )}
          <div className='header-top-calendar'>
            <DoubleToggle typeCalendar={typeCalendar} setTypeCalendar={setTypeCalendar}/>
          </div>
          <div className='header-bottom-calendar'>
            <TextND text={thisMonth.name + ", " + thisMonth.year} size='big' hex='#000'/>
            <DateChanger 
              week={week} 
              setWeek={setWeek} 
              monthMatrix={thisMonth.matrix} 
              month={month} 
              setMonth={setMonth} 
              year={year} 
              setYear={setYear} 
              typeCalendar={typeCalendar}
              setWeekDays={setWeekDays}
            />
          </div>
          {
            typeCalendar === 'semana' &&
            <GridWeek 
              notes={elementos} 
              weekDays={weekDays} 
              setModal={setShowMessage} 
              setSelectedNote={setSelectedNote}  
            />  
          }
          {
            typeCalendar === 'mes' &&
            <MonthCalendar 
              monthMatrix={thisMonth.matrix} 
              monthNumber={thisMonth.monthNumber+1} 
              setModal={setShowMessage}
              setSelectedNote={setSelectedNote}
              notes={hiringsMonth}
            />
          }
        </div>
      </IonPage>
    );
  }
}

export default Dashboard;
