import CryptoJS from 'crypto-js';
import express from 'express'
import cors from 'cors'
import {apiKeyAuth, adminapiKeyAuth} from './auth.js'
import {createNewChat, getUsers, getLoginUser, insertUser, gettrabajo, getUserbyDPI, setsettings, getContactsByUserDPI, getChatBetweenUsers, updatetrab, gettrabajoant, insertartrabant, insertartipotrabajo, gettrabajoSABTE, getTrabajoSABTEemple,insertChatMessage, getChatID, insertHiring, getCurrentHirings} from './db.js'
import { getWorkers, getTrustedUsersByDpi, creatNeoUser, updateNeoUser, addUserAsTrustedPerson} from './neo.js'
import { Admin_Exist, extendban, getbanusers, getbanusersprev, getreports, unban } from './administration.js';
import {send_email_forfg, send_fg_password} from './fg_function.js'

const app = express()
const port = 3000


app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'api-key' ],
}))



app.get('/', (req, res) => {
  res.send('Trying the API in order to know if it works or not')
})

app.get('/test', apiKeyAuth ,async (req, res) => {
  try {
    res.send('Auth works')

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})


app.get('/users',apiKeyAuth ,async (req, res) => {
  try {
      const users = await getUsers()
      res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// apiKeyAuth,
app.get('/login_admin/:dpi/:password', apiKeyAuth ,async (req, res) => {
  try {
    const { dpi, password } = req.params
    const users = await Admin_Exist(dpi, password)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.get('/reports', adminapiKeyAuth , async (req, res) => {
  try {
    const users = await getreports()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.get('/banprev', adminapiKeyAuth , async (req, res) => {
  try {
    const users = await getbanusersprev()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})


app.get('/banusers', adminapiKeyAuth , async (req, res) => {
  try {
    const users = await getbanusers()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})


app.put('/extendban' , adminapiKeyAuth ,async (req, res) => {
  const { DPI, fecha } = req.body; 
  try {
    const users = await extendban(DPI, fecha)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})


app.put('/unbanuser', adminapiKeyAuth , async (req, res) => {
  const { DPI } = req.body; 
  try {
    const users = await unban(DPI)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})





app.post('/LoginUser', apiKeyAuth, async (req, res) => {
  try {
    const { dpi, password } = req.body;

    const user = await getLoginUser(dpi);

    if (user) {

      if (password === user.contrasenia) {
        return res.status(200).json(user);
      } else {
        return res.status(400).json({ error: 'Incorrect password' });
      }
    } else {
      return res.status(400).json({ error: 'User not found' });
    }

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/users', apiKeyAuth ,async (req, res) => {
  try {
    const {
      dpi, name, lastnames, password, email, phoneNumber, role, departamento, municipio
    } = req.body

    const result = await insertUser(dpi, name, lastnames, password, email, phoneNumber, role, departamento, municipio)
    res.status(200).json({ Succes: 'User inserted' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.post('/usersNeo', apiKeyAuth ,async (req, res) => {
  try {
    const {
      nombre, apellidos, municipio, rating, imagen, dpi, telefono
    } = req.body
    const result = await creatNeoUser(nombre, apellidos, municipio, rating, imagen, dpi, telefono)
    
    res.status(200).json({ Succes: 'Neo User inserted' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.get('/users/:dpi', apiKeyAuth ,async (req, res) => {
  try {
    const { dpi } = req.params
    const user = await getUserbyDPI(dpi)

    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ error: 'user not found' })
    }

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.get('/workers/:job', apiKeyAuth ,async (req, res) => {
  try {
    const { job } = req.params
    const workers = await getWorkers(job);
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})

app.put('/setsettings', apiKeyAuth ,async (req, res) => {
  const { municipio, imagen, sexo, fecha_nacimiento, DPI, role, telefono, trabajo } = req.body; 
  if (!municipio || !imagen || !sexo || !fecha_nacimiento || !DPI || !role || !telefono || !trabajo) {
    res.status(400).json({ error: 'Datos incompletos en el cuerpo de la solicitud' });
  } else {
    try {
      await setsettings(municipio, imagen, sexo, fecha_nacimiento, DPI, role, telefono, trabajo);
      res.send('Inserted successfully');
    } catch (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
});

app.put('/setNeoSettings', apiKeyAuth ,async (req, res) => {
  const { dpi, municipio, imagen, telefono } = req.body; 
  if (!dpi || !municipio || !imagen || !telefono ) {
    res.status(400).json({ error: 'Datos incompletos en el cuerpo de la solicitud' });
  } else {
    try {
      await updateNeoUser(dpi, municipio, imagen, telefono);
      res.send('Updated successfully');
    } catch (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
});


app.get('/ctrabajo/:dpi', apiKeyAuth ,async (req, res) => {
  try {
    const { dpi } = req.params
    const user = await gettrabajo(dpi)
    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).json({ error: 'user not found' })
    }

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.get('/contacts/:dpi', async (req, res) => {
  try {
    const { dpi } = req.params;
    const contacts = await getContactsByUserDPI(dpi);
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error getting contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/trustNetwork/:dpi', apiKeyAuth ,async (req, res) => {
  try {
    const { dpi } = req.params;
    const trustedUsers = await getTrustedUsersByDpi(dpi)
    res.status(200).json(trustedUsers);

  } catch (error) {
    console.error('Error getting trusted Users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.post('/contacts/createChat', apiKeyAuth, async (req, res) => {
  try {
    const { dpi1, dpi2 } = req.body;

    // Validación de entrada
    if (!dpi1 || !dpi2) {
      return res.status(400).json({ error: 'dpi1 and dpi2 are required' });
    }

    // Intentar crear o recuperar el chat entre los usuarios
    const chat = await createNewChat(dpi1, dpi2);

    if (chat) {
      return res.status(200).json({ success: "Successfully created new chat" });
    } else {
      return res.status(400).json({ error: "Chat creation failed or already exists" });
    }

  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/contacts/messages', apiKeyAuth ,async (req, res) => {
  try {
    const { dpi1, dpi2 } = req.body;
    const chatMessagges = await getChatBetweenUsers(dpi1, dpi2)
    res.status(200).json(chatMessagges);

  } catch (error) {
    console.error('Error getting chat messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.post('/sendforgot_phone', apiKeyAuth ,async (req, res) => {
  try {
    const { telefono } = req.body;
    const codigo = (Math.random() + 1).toString(36).substring(7);
    const forgotPhone = await send_fg_password(telefono, codigo)
    if (forgotPhone === true){
      res.status(200).json('response:message sended');
    }
    else{
      res.status(400).json('Bad request');
    }    

  } catch (error) {
    console.error('Error getting chat messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.post('/sendforgot_mail', apiKeyAuth ,async (req, res) => {
  try {
    const { email, nombre } = req.body;
    const codigo = (Math.random() + 1).toString(36).substring(7);
    const forgotmail = await send_email_forfg(email,codigo, nombre)
    if (forgotmail){
      res.status(200).json('response:message sended');
    }
    else{
      res.status(400).json('Bad request');
    }

  } catch (error) {
    console.error('Error getting chat messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.put('/confitrab', apiKeyAuth ,async (req, res) => {
  const [dpi, trabajo] = [req.body.dpi, req.body.trabajo]
  if (!trabajo || !dpi) {
    res.status(400).json({ error: 'Datos incompletos en el cuerpo de la solicitud' })
  } else {
    try {
      const resp = await updatetrab(trabajo, dpi)
      res.send('Updated succesfully')
    } catch (error) {
      throw error
    }
  }
})

app.get('/trabajoanterior/:dpi', apiKeyAuth ,async (req, res) => {
//Tomar nota el dpi es del trabajador osea el que esta haciendo el trabajo 
  try {
    const { dpi } = req.params;
    const trabjant = await gettrabajoant(dpi)
    res.status(200).json(trabjant);

  } catch (error) {
    console.error('Error getting trabajos anteriores:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.get('/trabajoanteriorSABTE/:dpi', apiKeyAuth ,async (req, res) => {
  try {
    const { dpi } = req.params;
    const trabjant = await gettrabajoSABTE(dpi)
    res.status(200).json(trabjant);

  } catch (error) {
    console.error('Error getting trabajos anteriores:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.get('/trabajoanteriorSABTEemploy/:dpi', apiKeyAuth, async (req, res) => {
  try {
    const { dpi } = req.params;
    if (!dpi) {
      return res.status(400).json({ error: 'DPI parameter is required' });
    }
    const trabjant = await getTrabajoSABTEemple(dpi);
    res.status(200).json(trabjant);
  } catch (error) {
    console.error('Error getting trabajos anteriores:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/trabajaoanterior', apiKeyAuth ,async (req, res) => {
  try {
    const [ dpitrabajador, dpiempleador, titulo, estado, imagen ] = [  req.body.dpitrabajador, req.body.dpiempleador, req.body.titulo, req.body.estado, req.body.imagen]
    const result = await insertartrabant(dpitrabajador, dpiempleador, titulo, estado, imagen)
    res.status(200).json({ Succes: 'Trabajo anterior se inserto' })
  } catch (error) {
  }
})


app.post('/instipotrabajo', apiKeyAuth ,async (req, res) => {
  try {
    const [ nombre_trabajo, descripcion ] = [ req.body.nombre_trabajo, req.body.descripcion]
    const result = await insertartipotrabajo(nombre_trabajo, descripcion)
    res.status(200).json({ Succes: 'Trabajo anterior se inserto' })
  } catch (error) {
  }
})

app.post('/contacts/message', apiKeyAuth ,async (req, res) => {
  try {
    const { contenido, id_chat, dpi} = req.body;
    await insertChatMessage(contenido, id_chat, dpi) 
    res.status(200).json({ Succes: 'Mensaje insertado'})
  } catch (error) {
    console.error('Error posting message:', error)
    res.status(500).json({error: 'Internal Server Error' })
  }
})
// Endpoint to getChatID
app.post('/contacts/chatID', apiKeyAuth ,async (req, res) => {
  try {
    const { dpi1, dpi2 } = req.body;
    const chatMessagges = await getChatID(dpi1, dpi2)
    res.status(200).json(chatMessagges);

  } catch (error) {
    console.error('Error getting chat messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.post('/contacts/hire', apiKeyAuth ,async (req, res) => {
  try {
    const { descripcion, dpiempleador, dpiempleado, timeStampCita, pago } = req.body;
     await insertHiring(descripcion, dpiempleador, dpiempleado, timeStampCita, pago)
     res.status(200).json({ Success: 'Contrato realizado'})
  } catch (error) {
    console.error('Error while hiring person:', error)
    res.status(500).json({ error: 'Internal Server Error'})
  }
})

app.get('/contacts/hirings/:dpi', apiKeyAuth ,async (req, res) => {
  try {
    const { dpi } = req.params;
    const hirings = await getCurrentHirings(dpi)
    res.status(200).json(hirings)
  } catch (error) {
    console.error("Error while getting hirings:", error)
    res.status(500).json({ error: 'Internal Server Error'})
  }
})

app.post('/trustNetwork/addTrust', apiKeyAuth ,async (req, res) => {
  try {
    const { dpi1, dpi2 } = req.body;
     await addUserAsTrustedPerson(dpi1, dpi2)
     res.status(200).json({ Success: 'Trusted person was added'})
  } catch (error) {
    console.error('Trusted person could not be added:', error)
    res.status(500).json({ error: 'Internal Server Error'})
  }
})
