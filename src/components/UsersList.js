import React, {useEffect} from 'react'
import {useContext} from 'react';
import UserContext from '../context/User/UserContext';

const UsersList = () => {

    // Vamos a tomar del estado a los usuarios, el metodo de tomarlos y el metodo de
    // tomar el perfil
    const {users, getUsers, getProfile} = useContext(UserContext)

    // useEffect se ejecuta al iniciar el componente, en este caso muestra a todos los usuarios
    // y se los asigna a la variable [] para llenar el array vacío
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <div className="list-group">
                {
                    // users al ser un arreglo, podemos ir iterando cada objeto del array con map
                    // en este caso a cada usuario muestra su link. imagen y texto
                    users.map((user) => (
                        <a 
                            href="#!" 
                            key={user.id} 
                            className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
                            onClick={() => getProfile(user.id)}
                        >
                            <img src={user.avatar} alt="avatar" className="img-fluid mr-4 rounded-circle" width="70"/>
                            <p>
                                {`${user.first_name} ${user.last_name}`}
                            </p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default UsersList
