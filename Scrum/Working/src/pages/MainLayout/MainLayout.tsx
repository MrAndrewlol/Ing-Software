import { IonContent } from '@ionic/react';
import NavigationBar from '../../components/Navigation/Navigation';


interface MainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children}) => {    

    return (
      <>
        <NavigationBar /> {/* Pass setRequest prop */}
        <IonContent>
          {children}
        </IonContent>
      </>
    );
  };
  

export default MainLayout;