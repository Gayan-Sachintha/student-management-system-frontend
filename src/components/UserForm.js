import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import axios from 'axios';

const UserForm = ({ user, refreshUsers, handleEditCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await axios.put(`http://localhost:5000/api/users/${user.id}`, { name, email });
      handleEditCancel();
    } else {
      await axios.post('http://localhost:5000/api/users', { name, email });
    }
    refreshUsers();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button type="submit" variant="contained" color="primary">
            {user ? 'Update User' : 'Add User'}
          </Button>
          {user && (
            <Button variant="outlined" color="secondary" onClick={handleEditCancel}>
              Cancel Edit
            </Button>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default UserForm;
