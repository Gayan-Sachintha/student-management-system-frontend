import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper,
} from '@mui/material';
import { deleteCourse } from '../../services/api';

const CourseList = ({ courses, refreshCourses, setEditCourse }) => {
  const handleDelete = async (id) => {
    await deleteCourse(id);
    refreshCourses();
  };

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Course Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.course_name}</TableCell>
              <TableCell>{course.course_description}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setEditCourse(course)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete(course.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseList;
