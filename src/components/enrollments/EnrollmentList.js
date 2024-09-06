import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@mui/material';

const EnrollmentList = ({ enrollments }) => (
  <TableContainer component={Paper} style={{ marginTop: '20px' }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Student Name</TableCell>
          <TableCell>Course Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {enrollments.map((enrollment, index) => (
          <TableRow key={index}>
            <TableCell>{enrollment.student_name}</TableCell>
            <TableCell>{enrollment.course_name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default EnrollmentList;
