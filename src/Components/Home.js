import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';

const Home = () => {
  const featureItems = [
    { title: 'Feature 1', description: 'Description of Feature 1' },
    { title: 'Feature 2', description: 'Description of Feature 2' },
    { title: 'Feature 3', description: 'Description of Feature 3' },
  ];

  const cardItems = [
    { title: 'Card 1', description: 'This is the first card' },
    { title: 'Card 2', description: 'This is the second card' },
    { title: 'Card 3', description: 'This is the third card' },
    { title: 'Card 4', description: 'This is the fourth card' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
        sx={{ background: 'linear-gradient(to right, #f12711, #f5af19)' }}
        p={4}
      >
        <Box textAlign="center">
          <Typography variant="h2" color="white" fontWeight={700}>
            Welcome to Our Platform
          </Typography>
          <Typography variant="h6" color="white" mt={2}>
            Explore our services and offerings tailored just for you!
          </Typography>git add .

          <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box py={8} textAlign="center">
        <Typography variant="h4" fontWeight={600} mb={4}>
          Our Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {featureItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" mt={2}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Cards Section */}
      <Box py={8} textAlign="center">
        <Typography variant="h4" fontWeight={600} mb={4}>
          Explore Categories
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {cardItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" mt={2}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
