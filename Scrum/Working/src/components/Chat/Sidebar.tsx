import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import Chat from './Chat';
import { getContacts, getChatMessages } from '../../controller/ChatController';

const Sidebar = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contactsData = await getContacts("3834 49898 0101");
                setContacts(contactsData);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchData();

        return () => {
            setContacts([]);
        };
    }, []);

    const handlePersonClick = async (dpi) => {
        const selectedPerson = contacts.find(person => person.dpi === dpi);
        setSelectedPerson(selectedPerson);

        try {
            const chatMessages = await getChatMessages("3810 35859 0101", "3834 49898 0101");
            
            // Formatear los mensajes para que coincidan con el formato esperado por el componente Chat
            const formattedMessages = chatMessages.map(msg => ({
                message: msg.contenido,
                sender: msg.dpi === "3810 35859 0101" ? 'me' : 'you'
            }));

            setMessages(formattedMessages);
        } catch (error) {
            console.error('Error fetching chat messages:', error);
        }
    };

    return (
        <div className="wrapper">
            <div className="container1">
                <div className="left">
                    <div className="top">
                        <input type="text" placeholder="Search" />
                        <a href="javascript:;" className="search"></a>
                    </div>
                    <ul className="people">
                        {contacts.map((person, index) => (
                            <li key={index} className="person" onClick={() => handlePersonClick(person.dpi)}>
                                <img src={person.img} alt="" />
                                <span className="name">{person.name}</span>
                                <span className="time">{person.time}</span>
                                <span className="preview">{person.preview}</span>
                            </li>
                        ))}
                    </ul>
                </div> 
                <div className="right">
                    <div className="top">
                        <span>To: <span className="name">{selectedPerson ? selectedPerson.name : "Persona con la que está chateando"}</span></span>
                    </div>
                    <Chat messages={messages} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
