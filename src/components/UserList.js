import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Table, Button, Container, Alert, Toast } from "react-bootstrap";
import ToastMessage from "./ToastMessage"; // Import Toast component

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load users. Please try again.");
        setLoading(false);
      });
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
        setToastMessage("User deleted successfully!");
      })
      .catch(() => setToastMessage("Failed to delete user."));
  };

  return (
    <Container>
      <h2 className="my-4 text-center">User List</h2>
      {error && <Alert variant="danger">{error}</Alert>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="warning" onClick={() => navigate(`/edit-user/${user.id}`)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Show Toast Message */}
      {toastMessage && <ToastMessage show={!!toastMessage} onClose={() => setToastMessage("")} message={toastMessage} />}
    </Container>
  );
};

export default UserList;