import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const featureItems = [
    { title: 'Healthy Servings', image: '/image1.jpg' },
    { title: 'Nutritious Recipes', image: '/images.jpeg' },
    { title: 'Fresh Foods', image: '/images2.png' },
  ];
  const navigate = useNavigate();

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
          </Typography>
          <Button variant="contained" size="large" sx={{ color:'#d13d00', mt: 4, backgroundColor: "#fff" }} onClick={() => navigate('/add-to-cart')}>
            Add To Cart
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
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="200"
                  image={item.image}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight={600}>
                    {item.title}
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
