import { useState, useEffect } from "react";
import { getWorkersByJob, getWorkersByName } from "../../controller/UserController";
import "./List.css";
import Information from "./Information";
import TextND from "../Txt/TextND";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ContainerProps {
    job: string
    setTotal: (total: number) => void
}

type Worker = {
	nombre: string,
	telefono: string,
	dpi: string,
	contactos_en_comun: number,
	direccion: string,
	imagen: string,
	rating: string,
	trabajo: string,
}

const List: React.FC<ContainerProps> = ({ job, setTotal }) => {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [isLoading, setIsLoading] = useState(true); // New state to track loading status

    useEffect(() => {
        const fetchWorkers = async () => {
          try {
	    const user = localStorage.getItem("User")

	    if (user) {
	    
	    const dpiUser = JSON.parse(user).dpi
	    setIsLoading(true);
            const fetchedWorkers = await getWorkersByJob(job, dpiUser);
            setWorkers(fetchedWorkers);
	    setTotal(fetchedWorkers.length)

	    console.log(fetchedWorkers);
	    
            
            setTimeout(() => {
          setWorkers(fetchedWorkers);
          setIsLoading(false);
        }, 1250);
	    }
          } catch (error) {
            console.error("Error fetching workers:", error);
            setIsLoading(false);
          }
        };
    
        fetchWorkers();

      }, [job]);

  return (
    <div id="list-job-container">
      {isLoading ? (
        // Show skeletons while loading
        <div>
          {/* Skeleton placeholder for worker cards */}
          <Skeleton
            height={150}
            count={5}
            className="custom-skeleton"
            width={`95%`}
            style={{
              marginBottom: "auto", 
              display: "block",
              marginLeft: "auto", 
              marginRight: "auto", 
              maxWidth: "100%", 
            }}
          />
        </div>
      ) : (
        <>
          {workers.map((worker, index) => (
            <div key={index}>
              <Information trabajador={worker} />
            </div>
          ))}
          <div id="text-results">
            <TextND
              size="small"
              text="Esos son todos los resultados"
              hex="#000"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default List
