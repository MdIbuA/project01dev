import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [12, 19, 3, 5, 2],
        backgroundColor: '#1976d2',
      },
    ],
  };

  return (
    <Grid container spacing={3} style={{ padding: '20px' }}>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: '20px', borderRadius: '10px' }}>
          <Typography variant="h5" gutterBottom>Overview</Typography>
          <Typography>Total Projects: 5</Typography>
          <Typography>Total Tasks: 20</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: '20px', borderRadius: '10px' }}>
          <Typography variant="h5" gutterBottom>Productivity Chart</Typography>
          <Bar data={data} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;