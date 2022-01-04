import React, {useReducer} from 'react'
import UserReducer from './UserReduce';
import UserContext from './UserContext';
import axios from 'axios';

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)
    
    // Push in users array
    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })
    }
    
    // Change the value of userSelected
    const getProfile = async (id) => {
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

