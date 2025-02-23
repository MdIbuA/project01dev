import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { useProjects } from '../context/ProjectContext';

const Projects = () => {
  const { projects, deleteProject } = useProjects();

  return (
    <Grid container spacing={3} style={{ padding: '20px' }}>
      {projects.map((project) => (
        <Grid item xs={12} md={6} key={project.id}>
          <Paper style={{ padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h6" gutterBottom>{project.title}</Typography>
            <Typography>{project.description}</Typography>
            <Typography>Deadline: {project.deadline}</Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '10px', marginRight: '10px' }}
            >
              View Details
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ marginTop: '10px' }}
              onClick={() => deleteProject(project.id)}
            >
              Delete
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;