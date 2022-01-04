import React, {useReducer} from 'react'

// Archivo que mueve la lógica y asigna los nuevos valores al estado
import UserReducer from './UserReduce';

// Archivo que crea el contexto
import UserContext from './UserContext';
import axios from 'axios';

const UserState = (props) => {

    // Estado inicial de los campos, un array vacío y sin usuario seleccionado
    const initialState = {
        users: [],
        selectedUser: null
    }
 
    // Aquí es parecido al useState, le pasamos el estado, el dispatch es lo que
    // le asigna a los campos dependiendo del tipo de variable, en pocas palabras es lo que
    // se ejecuta,
    // y al useReducer le pasamos la lógica y el estado inicial
    const [state, dispatch] = useReducer(UserReducer, initialState)
    
    // Push in users array
    const getUsers = async () => {
        // Usanso axios tomamos la api y se la asignamos con el payload al tipo de variable
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })
    }
    
    // Change the value of userSelected
    const getProfile = async (id) => {
        // En esta parte usando la api, le pasamos un id, para mostrar al usuario
        // que seleccionamos
        const res = await axios.get('https://reqres.in/api/users/' + id)
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState

