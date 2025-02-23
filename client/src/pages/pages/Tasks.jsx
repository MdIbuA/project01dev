import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { useTasks } from '../context/TaskContext';

const Tasks = () => {
  const { tasks, deleteTask } = useTasks();

  return (
    <Grid container spacing={3} style={{ padding: '20px' }}>
      {tasks.map((task) => (
        <Grid item xs={12} md={6} key={task.id}>
          <Paper style={{ padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h6" gutterBottom>{task.title}</Typography>
            <Typography>{task.description}</Typography>
            <Typography>Status: {task.status}</Typography>
            <Typography>Priority: {task.priority}</Typography>
            <Typography>Deadline: {task.deadline}</Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '10px', marginRight: '10px' }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ marginTop: '10px' }}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tasks;