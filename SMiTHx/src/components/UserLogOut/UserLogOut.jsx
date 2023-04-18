//import './UserLogOut.css';
import { logOut } from '../../utilities/users-service';
import { Link } from 'react-router-dom';

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
      <Link to="/" className="btn-sm" onClick={handleLogOut}>LOG OUT</Link>
  );
}