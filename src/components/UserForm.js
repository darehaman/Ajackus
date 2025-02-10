import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import ToastMessage from "./ToastMessage"; // Import Toast component

const UserForm = ({ users, setUsers }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (isEditing) {
      const userToEdit = users.find((user) => user.id === parseInt(id));
      if (userToEdit) setUserData(userToEdit);
    }
  }, [id, users, isEditing]);

  const validateForm = () => {
    let newErrors = {};
    if (!userData.name.trim()) newErrors.name = "Name is required";
    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Invalid email format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);

    if (!validateForm()) return;

    setLoading(true);
    try {
      if (isEditing) {
        await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, userData);
        setUsers(users.map((u) => (u.id === parseInt(id) ? userData : u)));
        setToastMessage("User updated successfully!");
      } else {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", userData);
        const newUser = { ...response.data, id: users.length + 1 };
        setUsers([...users, newUser]);
        setToastMessage("User added successfully!");
      }
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error("API error:", error);
      setApiError("Failed to save user data. Please try again.");
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2 className="my-4 text-center">{isEditing ? "Edit User" : "Add User"}</h2>
      
      {apiError && <Alert variant="danger">{apiError}</Alert>}
      {Object.keys(errors).length > 0 && (
        <Alert variant="danger">
          {Object.values(errors).map((err, index) => (
            <div key={index}>{err}</div>
          ))}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="success" type="submit" disabled={loading}>
          {loading ? <Spinner as="span" animation="border" size="sm" /> : isEditing ? "Update User" : "Add User"}
        </Button>
      </Form>

      {/* Show Toast Message */}
      {toastMessage && <ToastMessage show={!!toastMessage} onClose={() => setToastMessage("")} message={toastMessage} />}
    </Container>
  );
};

export default UserForm;
