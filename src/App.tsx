import { useContext } from 'react';
import './App.css';
import Sign_up from './componants/Sign_Up/Sign_up';
import Dashboard from './componants/dashboard/Dashboard';
import { AuthContext } from './componants/authentication_context/Authcontext';

function App() {
const {isAuthenticated} = useContext(AuthContext);

  return (
    <>
      {isAuthenticated  ? <Dashboard /> : <Sign_up />}
    </>
  );
}

export default App;
