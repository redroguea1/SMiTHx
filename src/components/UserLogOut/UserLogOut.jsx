//import './UserLogOut.css';
import { logOut } from '../../utilities/users-service';
import { Link } from 'react-router-dom';

export default function UserLogOut({ setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
      <Link to="/" onClick={handleLogOut}>LOG OUT</Link>
  );
}