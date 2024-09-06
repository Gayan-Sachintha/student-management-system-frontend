import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import EnrollmentForm from '../components/enrollments/EnrollmentForm';
import EnrollmentList from '../components/enrollments/EnrollmentList';
import { getEnrollments } from '../services/api';

const EnrollmentsPage = () => {
  const [enrollments, setEnrollments] = useState([]);

  const fetchEnrollments = async () => {
    const res = await getEnrollments();
    setEnrollments(res.data);
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Manage Enrollments
      </Typography>
      <EnrollmentForm refreshEnrollments={fetchEnrollments} />
      <EnrollmentList enrollments={enrollments} />
    </>
  );
};

export default EnrollmentsPage;
