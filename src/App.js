import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { Container, Typography } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Student Management System
      </Typography>
      <UserForm user={editUser} refreshUsers={fetchUsers} handleEditCancel={() => setEditUser(null)} />
      <UserList users={users} refreshUsers={fetchUsers} setEditUser={setEditUser} />
    </Container>
  );
}

export default App;
