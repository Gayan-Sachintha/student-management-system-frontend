import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { addStudent, updateStudent } from '../../services/api';

const StudentForm = ({ student, refreshStudents, handleEditCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    grade: '',
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    } else {
      setFormData({ name: '', email: '', age: '', grade: '' });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (student) {
      await updateStudent(student.id, formData);
      handleEditCancel();
    } else {
      await addStudent(formData);
    }
    refreshStudents();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button type="submit" variant="contained" color="primary">
            {student ? 'Update Student' : 'Add Student'}
          </Button>
          {student && (
            <Button variant="outlined" color="secondary" onClick={handleEditCancel}>
              Cancel Edit
            </Button>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default StudentForm;
