import { useEffect, useState } from 'react';
import MilestoneService from '../services/MilestoneService';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    MilestoneService.getAllUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch users", error);
      });
  }, []);

  return (
    <div className="container">
      {users ? (
        <>
          <h2 className="mb-4">Users List</h2>
          <ul className="list-group mb-4">
            {users.map((user) => (
              <li
                key={user.userId}
                className="list-group-item list-group-item-action"
                onClick={() => setSelectedUser(user)}
                style={{ cursor: 'pointer' }}
              >
                {user.username} ({user.email})
              </li>
            ))}
          </ul>

          {selectedUser && (
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title">Selected User Details</h4>
                <p className="card-text"><strong>Username:</strong> {selectedUser.username}</p>
                <p className="card-text"><strong>Email:</strong> {selectedUser.email}</p>
                <p className="card-text"><strong>Admin:</strong> {selectedUser.isAdmin ? 'Yes' : 'No'}</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default Users;

