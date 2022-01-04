import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importamos los components del perfil y la lista de usuarios
import Profile from './components/Profile';
import UsersList from './components/UsersList';

// Importamos el estado del que van a depender los componentes anteriores
import UserState from './context/User/UserState';

function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UsersList/>
          </div>
          <div className="col-md-5">
            <Profile/>
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
