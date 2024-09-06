import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import CourseForm from '../components/courses/CourseForm';
import CourseList from '../components/courses/CourseList';
import { getCourses } from '../services/api';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [editCourse, setEditCourse] = useState(null);

  const fetchCourses = async () => {
    const res = await getCourses();
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Manage Courses
      </Typography>
      <CourseForm
        course={editCourse}
        refreshCourses={fetchCourses}
        handleEditCancel={() => setEditCourse(null)}
      />
      <CourseList
        courses={courses}
        refreshCourses={fetchCourses}
        setEditCourse={setEditCourse}
      />
    </>
  );
};

export default CoursesPage;
