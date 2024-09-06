import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { addCourse, updateCourse } from '../../services/api';

const CourseForm = ({ course, refreshCourses, handleEditCancel }) => {
  const [formData, setFormData] = useState({
    course_name: '',
    course_description: '',
  });

  useEffect(() => {
    if (course) {
      setFormData(course);
    } else {
      setFormData({ course_name: '', course_description: '' });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (course) {
      await updateCourse(course.id, formData);
      handleEditCancel();
    } else {
      await addCourse(formData);
    }
    refreshCourses();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Course Name"
          name="course_name"
          value={formData.course_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Course Description"
          name="course_description"
          value={formData.course_description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button type="submit" variant="contained" color="primary">
            {course ? 'Update Course' : 'Add Course'}
          </Button>
          {course && (
            <Button variant="outlined" color="secondary" onClick={handleEditCancel}>
              Cancel Edit
            </Button>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default CourseForm;
