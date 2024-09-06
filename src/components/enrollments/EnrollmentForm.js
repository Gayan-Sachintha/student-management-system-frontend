import React, { useState, useEffect } from 'react';
import {
  Button, Container, Box, FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
import { enrollStudent, getStudents, getCourses } from '../../services/api';

const EnrollmentForm = ({ refreshEnrollments }) => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const studentsRes = await getStudents();
      const coursesRes = await getCourses();
      setStudents(studentsRes.data);
      setCourses(coursesRes.data);
    };
    fetchData();
  }, []);

  const handleEnroll = async () => {
    if (selectedStudent && selectedCourse) {
      await enrollStudent({
        student_id: selectedStudent,
        course_id: selectedCourse,
      });
      refreshEnrollments();
    }
  };

  return (
    <Container>
      <FormControl fullWidth margin="normal">
        <InputLabel>Student</InputLabel>
        <Select
          value={selectedStudent}
          label="Student"
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          {students.map((student) => (
            <MenuItem key={student.id} value={student.id}>
              {student.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Course</InputLabel>
        <Select
          value={selectedCourse}
          label="Course"
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          {courses.map((course) => (
            <MenuItem key={course.id} value={course.id}>
              {course.course_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleEnroll}>
          Enroll Student
        </Button>
      </Box>
    </Container>
  );
};

export default EnrollmentForm;
