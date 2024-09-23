import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD, REMOVE, REMOVE_ONE, RMV_ONE } from '../Redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, CardContent, Grid, IconButton, Rating, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartReducer.carts);

  const compare = () => {
    const comparedata = getdata.filter((e) => e.id === Number(id));
    setData(comparedata);
  };

  const send = (item) => {
    dispatch(ADD(item));
  };

  const dltOne = (id) => {
    dispatch(RMV_ONE(id));
  };

  const dlt = (id) => {
    dispatch(REMOVE(id));
    history("/");
  };

  useEffect(() => {
    compare();
  }, [id, getdata]);

  return (
    <Card >
      <Box>
        <Typography variant='h3' display="flex" justifyContent='center' p={2}>Items Details Page</Typography>
      </Box>
      <CardContent >

        {data.map((ele) => (
          <Box key={ele.id} display='flex' gap={4} justifyContent="center">
            <Box >
              <img src={ele.imgdata} alt={ele.rname} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Grid container justifyContent="space-between" >
                <Grid item >
                  <Box display='flex' p={2}>
                    <Typography variant='h6' fontWeight={600}>
                      Restaurant:
                    </Typography>
                    <Typography variant='h6'>
                      {ele.rname}
                    </Typography>
                  </Box>
                  <Box display='flex' p={2}>
                    <Typography variant='h6' fontWeight={600}>
                      Price:
                    </Typography>
                    <Typography variant='h6'>
                      ₹{ele.price}
                    </Typography>
                  </Box>

                  <Box display='flex' p={2}>
                    <Typography variant='h6' fontWeight={600}>
                      Dishes:
                    </Typography>
                    <Typography variant='h6'>
                      ₹{ele.address}
                    </Typography>
                  </Box>

                  <Box display='flex' p={2}>
                    <Typography variant='h6' fontWeight={600}>
                      Total:
                    </Typography>
                    <Typography variant='h6'>
                      ₹{ele.price * ele.qnty}
                    </Typography>
                  </Box>
                </Grid>


                <Grid item>
                  <Box display='flex' p={2}>
                    <Typography variant='h6' fontWeight={600}>
                      Rating:
                    </Typography>
                    <Rating value={ele.rating} />
                  </Box>
                  <Box display='flex' p={2}>
                    <Typography variant='h6' fontWeight={600}>
                      Order Review:
                    </Typography>
                    <Typography variant='h6'>
                      {ele.somedata}
                    </Typography>
                  </Box>
                  <Box display='flex' p={2}>
                    <Typography variant='h6' fontWeight={600}>
                      Remove:
                      <IconButton>
                        <DeleteIcon onClick={() => dlt(ele.id)} />
                      </IconButton>
                    </Typography>
                  </Box>
                </Grid>

              </Grid>

              <Box display="flex" alignItems="center" p={2}>

                <Button
                  variant="contained"
                  onClick={() => { ele.qnty !== 1 ? dltOne(ele) : dlt(ele.id) }}
                  sx={{ fontSize: 24, minWidth: 40 }}
                >
                  -
                </Button>

                {/* Quantity Display */}
                <Typography
                  variant="h6"
                  sx={{ mx: 2, fontSize: 22 }}
                >
                  {ele.qnty}
                </Typography>

                {/* Increase Quantity Button */}
                <Button
                  variant="contained"
                  onClick={() => send({ ...ele, qnty: ele.qnty + 1 })}
                  sx={{ fontSize: 24, minWidth: 40 }}
                >
                  +
                </Button>
              </Box>
            </Box>


          </Box>

        ))}
      </CardContent>
    </Card >
  );
};

export default CardsDetails;
