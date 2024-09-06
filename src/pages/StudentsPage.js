import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import StudentForm from '../components/students/StudentForm';
import StudentList from '../components/students/StudentList';
import { getStudents } from '../services/api';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Manage Students
      </Typography>
      <StudentForm
        student={editStudent}
        refreshStudents={fetchStudents}
        handleEditCancel={() => setEditStudent(null)}
      />
      <StudentList
        students={students}
        refreshStudents={fetchStudents}
        setEditStudent={setEditStudent}
      />
    </>
  );
};

export default StudentsPage;
