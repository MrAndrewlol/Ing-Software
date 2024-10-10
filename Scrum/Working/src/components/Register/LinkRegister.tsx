import { Link } from 'react-router-dom'
import './Input.css'
import React from 'react'

interface ContainerProps { }

const LinkRegister: React.FC<ContainerProps> = () => {
    return (
        <Link to='/register' className='a'>
            ¿No tienes cuenta? Registrate        
        </Link>
    )
}

export default LinkRegister