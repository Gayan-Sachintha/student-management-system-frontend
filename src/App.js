import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';
import StudentsPage from './pages/StudentsPage';
import CoursesPage from './pages/CoursesPage';
import EnrollmentsPage from './pages/EnrollmentsPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Student Management System
          </Typography>
          <Button color="inherit" component={Link} to="/students">Students</Button>
          <Button color="inherit" component={Link} to="/courses">Courses</Button>
          <Button color="inherit" component={Link} to="/enrollments">Enrollments</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/enrollments" element={<EnrollmentsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
