export async function getContacts(dpi: String) {
    try {
        const response = await fetch(`http://127.0.0.1:3000/contacts/${dpi}`);
        const data = await response.json();

        return data;

    } catch (error) {
        console.error('Error fetching contacts:', error);
        return [];
    }
}

export async function getChatMessages(dpi1: string, dpi2: string) {
    try {
        const data = {
            dpi1: dpi1,
            dpi2: dpi2
        };

        const response = await fetch("http://127.0.0.1:3000/contacts/messages", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch chat messages');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error while getting chat messages:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

export async function getChatIdWithDPI(dpi1: string, dpi2: string) {
    try {
        const data = {
            dpi1: dpi1,
            dpi2: dpi2
        };

        const response = await fetch("http://127.0.0.1:3000/contacts/chatID", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch chat ID');
        }

        const responseData = await response.json();
        console.log(responseData);
        return responseData;

    } catch (error) {
        console.error("Error while getting chat ID:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

export async function insertChatMessage(content: string, chatID: string, dpi: string) {
    try {
        const data = {
            contenido: content,
            id_chat: chatID,
            dpi: dpi
        };

        const response = await fetch("http://127.0.0.1:3000/contacts/message", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to post message');
        }

        const responseData = await response.json();
        return responseData; 
    } catch (error) {
        console.error("Error while inserting message:", error);
        throw error; 
    }
}

export async function makeHiring(description: string, dpiEmployer: string, dpiEmployee: string, appointmentTimeStamp: string) {
    try {
        // Convert the Guatemalan time (UTC-6) to UTC
        const localTime = new Date(appointmentTimeStamp);
        const offset = localTime.getTimezoneOffset() * 60000; // offset in milliseconds
        const utcTime = new Date(localTime.getTime() + offset);

        const data = {
            descripcion: description,
            dpiempleador: dpiEmployer,
            dpiempleado: dpiEmployee,
            timeStampCita: utcTime.toISOString() // Converts to UTC string
        };

        const response = await fetch("http://127.0.0.1:3000/contacts/hire", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to Hire worker');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error while hiring worker:", error);
        throw error;
    }
}


