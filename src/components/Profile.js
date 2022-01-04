import React, {useContext} from 'react'
import UserContext from '../context/User/UserContext';

const Profile = () => {

    const {selectedUser} = useContext(UserContext)

    return (
        <div>
            {
                selectedUser ? <div className="card-body text-center">
                    <img src={selectedUser.avatar} alt="avatar" className="card-img-top rounded-circle m-auto img-fluid" style={{width: 180}}/>
                    <h1>{`${selectedUser.first_name} ${selectedUser.first_name}`}</h1>
                    <h3>{selectedUser.email}</h3>
                </div> : <h1>User not found</h1>
            }
        </div>
    )
}

export default Profile
